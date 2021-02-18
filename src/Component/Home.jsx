import "../Assets/scss/home.scss";
import React from "react";
import homeBackground from "../Assets/image/home_background.png";
import cat_1 from "../Assets/image/cat-1.png";
import cat_2 from "../Assets/image/cat-2.png";
import cat_3 from "../Assets/image/cat-3.png";
import cat_4 from "../Assets/image/cat-4.png";
import cat_5 from "../Assets/image/cat-5.png";

const Home = () => {
  return (
    <>
      <div className="home-img">
        <img src={homeBackground} alt="homeBackgroundImg" width="100%" />
      </div>

      <div className="category-container">
        <h1 className="mb-5">TOP CATEGORY</h1>

        <div className="gallary-img">
          <img src={cat_1} alt="category1" width="60%" />
          <button className="btn">hand made tools</button>
          <img
            src={cat_2}
            alt="category2"
            className="ml-3"
            height="500px"
            width="35%"
          />
          <button className="btn2">handicraft product</button>
          <img
            src={cat_3}
            alt="category3"
            width="30%"
            className="mt-3"
            height="310px"
          />
          <button className="btn3">jewelry</button>
          <img
            src={cat_4}
            alt="category4"
            width="26%"
            className="ml-3 mt-3"
            height="310px"
          />
          <button className="btn4">furniture</button>

          <img src={cat_5} alt="category5" width="38%" className="ml-3" />
          <button className="btn5">Bags & Wallets</button>
        </div>
      </div>
    </>
  );
};

export default Home;
