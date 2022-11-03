import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
import ImgMainImage from "../assets/img/main-image.png";
import queryString from "query-string";

const Home = () => {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  console.log('items',items)

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems(parsed.category));
  }, []);

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }

    return (
      <li>
        <Item key={item.id} item={item} selected_count={selected_count} setShowWriteReview={setShowWriteReview} setShowReviews={setShowReviews} />
      </li>
    );
  };

  return (
    <div class="home">
      <Header />

      <section class="main-visual">
        <img src={ImgMainImage} alt="" />
      </section>
      <section class="content">
        {showCartList ? (
          <>
            <h1>Selected Items</h1>
            <p>Please show this page to the waiter.</p>
          </>
        ) : (
          <>
            <h1>How to order?</h1>
            <p>
              Thank you for loading Cj Menu by QR code.
              <br />
              Now, you can select your items below and show your order to our waiter.
            </p>
            <ul class="category">
              <li class="active">
                <a href="/">All</a>
              </li>
              <li>
                <a href="/?category=hot">Hot</a>
              </li>
              <li>
                <a href="/?category=cold">Cold</a>
              </li>
              <li>
                <a href="/?category=bagel">Bagel</a>
              </li>
            </ul>
          </>
        )}
        <ul class="items">{items && items.results && items.results.map((item) => showItem(item))}</ul>
      </section>

      <Footer price={subtotal} showCartList={showCartList} setShowCartList={setShowCartList} />

      {showWriteReview && <PopupWriteRevew setShowWriteReview={setShowWriteReview} />}
      {showReviews && <PopupRevews setShowReviews={setShowReviews} />}
    </div>
  );
};

export default Home;
