import React from "react";
import styled from "styled-components";

import { useStateValue } from "../context/StateProvider";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

function Cart() {
  const [{ cart }] = useStateValue();
  return (
    <Container>
      <Wrapper>
        <Title>GIỎ HÀNG</Title>
        <Top>
          <Link to="/">
            <TopButton>TIẾP TỤC ĐẶT HÀNG</TopButton>
          </Link>
          <TopTexts>
            <TopText>Tổng tiền: {cart?.length}</TopText>
          </TopTexts>
          <TopButton type="filled">THANH TOÁN</TopButton>
        </Top>
        {cart.map((item) => (
          <CartDetail
            id={item.id}
            image={item.image}
            size={item.size}
            price={item.price}
            name={item.name}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  margin: 0 60px;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.h2`
  cursor: pointer;
  margin: 0 10px;
`;
