import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import ImgSlider from "../components/Slider";

function Home() {
  return (
    <>
      <ImgSlider />
      <Categories />
      <Products />
    </>
  );
}

export default Home;
