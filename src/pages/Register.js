import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>tạo tài khoản</Title>
        <Form>
          <Input placeholder="Họ" />
          <Input placeholder="Tên" />
          <Input placeholder="Email" />
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <Input placeholder="Nhập lại mật khẩu" />
          <Button>Xác nhận</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  margin: 0 60px;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://file.hstatic.net/1000269795/file/z2227071264342_d8b53716fe7dd394186dc8269b91a273_3a37a79f8e444ce3af579860f9816428.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;
