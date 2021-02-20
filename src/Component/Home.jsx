import "../Assets/scss/home.scss";
import React from "react";
import homeBackground from "../Assets/image/home_background.png";
import cat_1 from "../Assets/image/cat-1.png";
import cat_2 from "../Assets/image/craftimg.jpg";
import cat_3 from "../Assets/image/jewellery1.jpg";
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
          <img src={cat_1} alt="category1" className="demo1" />
          <button className="general-btn btn">hand made tools</button>
          <img src={cat_2} alt="category2" className="demo1" />
          <button className="general-btn btn2">handicraft product</button>
          <img src={cat_3} alt="category3" className="demo1" />
          <button className="general-btn btn3">jewelry</button>
          <img src={cat_4} alt="category4" className="demo1" />
          <button className="general-btn btn4">furniture</button>
          <img src={cat_5} alt="category5" className="demo1" />
          <button className="general-btn btn5">Bags & Wallets</button>
        </div>
      </div>
      {/* <div className="btn-group"> */}
      {/* <button className="general-btn btnn">hand made tools</button> */}
      {/* <button className="general-btn btn2">handicraft product</button>
          <button className="general-btn btn3">jewelry</button>
          <button className="general-btn btn4">furniture</button>
          <button className="general-btn btn5">Bags & Wallets</button> */}
      {/* </div> */}
    </>
  );
};

export default Home;
