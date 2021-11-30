import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container>
      <Title>Thông tin mới</Title>
      <Description>Cập nhật thông tin mới của sản phẩm</Description>
      <InputContainer>
        <Input placeholder="Nhập Email" />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  margin-right: 60px;
  margin-left: 60px;
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  font-size: 25px;
`;
