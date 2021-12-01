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
        <img
          src="https://file.hstatic.net/1000269795/file/he_thong_dong_ho_chinh_hang_4b12972bb3a3490c844cb126791e0b6b.jpg"
          alt="slider1"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://file.hstatic.net/1000269795/file/khach_hang_797e389e3da144a3970feadbec426f43.jpg"
          alt="slider2"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://file.hstatic.net/1000269795/file/ky_thuat_vien_807ade7e5d9c488495b82d0053eeb6e4.jpg"
          alt="slider3"
        />
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
  @media (max-width: 600px) {
    margin: 0;
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
