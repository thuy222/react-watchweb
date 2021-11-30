import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="image/slider-1.jpg" alt="slider1" />
      </Wrap>
      <Wrap>
        <img src="image/slider-2.jpg" alt="slider2" />
      </Wrap>
      <Wrap>
        <img src="image/slider-3.jpg" alt="slider3" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin: 0 60px;
  ul li button:before {
    font-size: 10px;
    color: rgb(150, 150, 150);
    align-items: center;
    text-align: start;
  }
  ul li.slick-active button:before {
    color: pink;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    border: 2px solid transparent;
  }
`;
