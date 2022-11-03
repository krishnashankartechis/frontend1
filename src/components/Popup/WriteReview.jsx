import React, { useState } from "react";
import ImgIconCross from "../../assets/img/icon-cross.svg";
import ImgReaction0 from "../../assets/img/reaction-0.svg";
import ImgReaction1 from "../../assets/img/reaction-1.svg";
import ImgReaction2 from "../../assets/img/reaction-2.svg";
import ImgReaction3 from "../../assets/img/reaction-3.svg";

const WriteReview = ({ setShowWriteReview }) => {
  const [likeCount, setLikeCount] = useState(1);

  return (
    <section class="popup">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img src={ImgIconCross} onClick={() => setShowWriteReview(false)} class="cross" alt="" />
            <h2>Write Review</h2>
            <p>Choose your thought</p>
            <ul class="reactions">
              <li>
                {likeCount === 1 ? (
                  <img src={ImgReaction1} class="selected" onClick={() => setLikeCount(1)} alt="" />
                ) : (
                  <img src={ImgReaction1} onClick={() => setLikeCount(1)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 2 ? (
                  <img src={ImgReaction2} class="selected" onClick={() => setLikeCount(2)} alt="" />
                ) : (
                  <img src={ImgReaction2} onClick={() => setLikeCount(2)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 3 ? (
                  <img src={ImgReaction3} class="selected" onClick={() => setLikeCount(3)} alt="" />
                ) : (
                  <img src={ImgReaction3} onClick={() => setLikeCount(3)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 0 ? (
                  <img src={ImgReaction0} class="selected" onClick={() => setLikeCount(0)} alt="" />
                ) : (
                  <img src={ImgReaction0} onClick={() => setLikeCount(0)} alt="" />
                )}
              </li>
            </ul>
            <input type="text" name="name" placeholder="Enter your name" />
            <textarea name="body" placeholder="Enter your review"></textarea>
            <button>Send Review</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteReview;
