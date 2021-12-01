import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCart, BsFillBadge3DFill } from "react-icons/bs";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [{ cart }] = useStateValue();
  return (
    <Container>
      <Link to="/">
        <Logo>
          <img
            src="http://file.hstatic.net/1000269795/file/logo_dong_ho_chinh_hang.jpg"
            alt="logo"
          />
        </Logo>
      </Link>
      <Search>
        <input type="search" placeholder="Nhập mã sản phẩm..." />
      </Search>
      <Contact>
        <img
          src="https://theme.hstatic.net/1000269795/1000766647/14/tongdai-header-phone.png?v=377"
          alt=""
        />
      </Contact>
      <Link to="/register">
        <Register>ĐĂNG KÍ</Register>
      </Link>
      <Link to="/login">
        <Signin>ĐĂNG NHẬP</Signin>
      </Link>
      <Link to="/cart">
        <Cart>
          <BsCart />
          <span>{cart?.length}</span>
        </Cart>
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 10px 60px;
  display: flex;
  max-height: 80px;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 2px 5px;
  }
`;

const Logo = styled.div`
  padding-right: 15px;
  img {
    max-width: 255px;
  }
  @media (max-width: 768px) {
    img {
      max-width: 200px;
    }
  }
`;
const Search = styled.div`
  flex: 1;
  padding-right: 15px;
  font-size: 25px;
  text-align: left;
  input {
    padding-left: 10px;
    min-height: 30px;
    width: 100%;
    border-radius: 10px;
    outline: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Contact = styled.div`
  padding-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Cart = styled.div`
  color: white;
  font-size: 30px;
  position: relative;
  span {
    position: absolute;
    font-size: 16px;
    top: -8px;
    right: -8px;
    color: orange;
  }
  @media (max-width: 768px) {
    margin: 2px 10px;
  }
`;
const Register = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  color: white;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Signin = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  @media (max-width: 600px) {
    display: none;
  }
`;
