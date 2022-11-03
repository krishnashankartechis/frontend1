import React from "react";
import ImgReaction1 from "../../assets/img/reaction-1.svg";
import ImgIconCross from "../../assets/img/icon-cross.svg";

const Reviews = ({ setShowReviews }) => {
  return (
    <section class="popup">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img src={ImgIconCross} onClick={() => setShowReviews(false)} class="cross" alt="" />
            <h2>Reviews for “Chicken Makhani Burst + Lite”</h2>
            <ul class="reviews">
              <li>
                <img src={ImgReaction1} alt="" />
                <div class="name">Hayato</div>
                <div class="body">
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.
                </div>
              </li>
              <li>
                <img src={ImgReaction1} alt="" />
                <div class="name">Hayato</div>
                <div class="body">
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.
                </div>
              </li>
              <li>
                <img src={ImgReaction1} alt="" />
                <div class="name">Hayato</div>
                <div class="body">
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.
                </div>
              </li>
              <li>
                <img src={ImgReaction1} alt="" />
                <div class="name">Hayato</div>
                <div class="body">
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.
                </div>
              </li>
              <li>
                <img src={ImgReaction1} alt="" />
                <div class="name">Hayato</div>
                <div class="body">
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
