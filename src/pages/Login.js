import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng Nhập</Title>
        <Form>
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <Button>Xác nhận</Button>
          <Link to="/">Quên mật khẩu?</Link>
          <Link to="/register">Tạo tài khoản mới</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: 0 60px;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://file.hstatic.net/1000269795/file/dong-ho-chinh-hang-imperia-hai-phong_1c17fa0f512e4c6eb590abc4a26f697d.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 10px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin: 5px 0;
    font-size: 12px;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0;
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
