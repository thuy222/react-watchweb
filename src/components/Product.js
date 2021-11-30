import React from "react";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/detail/${item.id}`}>
        <Image src={item.img} />
      </Link>
      <Info>
        <p> {item.name}</p>
        <p> {item.size}</p>
        <p>{item.price}</p>
      </Info>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  position: relative;
  margin: 1px;
  min-width: 280px;
  height: 350px;
  border: 1px solid gray;
  text-align: center;
  @media (max-width: 768px) {
    min-width: 180px;
    height: 250px;
  }
`;

const Image = styled.img`
  transition: all 0.2s ease-in-out;
  padding: 10px 0;
  overflow: hidden;
  height: 75%;
  object-fit: contain;
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`;
const Info = styled.div`
  padding-left: 5px;
  line-height: 20px;
  border-top: 0.2px solid gray;
  p {
    font-size: 13px !important;
    color: #334862;
  }
  @media (max-width: 768px) {
    p {
      font-size: 11px;
    }
  }
`;

const Cart = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  svg {
    color: #39d889;
    font-size: 25px;
  }

  &:hover > svg {
    transform: scale(1.2);
    color: #b62a42;
  }
`;
