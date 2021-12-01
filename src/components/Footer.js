import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Đồng Hồ Chính Hãng</Logo>
        <Description>
          Nhà phân phối độc quyền các thương hiệu đồng hồ, kính mắt, bút ký nổi
          tiếng thế giới: Epos Swiss, Atlantic Swiss, Diamond D, Philippe
          Auguste, Jacques Lemans, Citizen, Aries Gold, dây da đồng hồ, dây đồng
          hồ đeo tay....
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon>
            <SiZalo />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Thông tin cần thiết</Title>
        <List>
          <ListItem>Chính sách bảo hành</ListItem>
          <ListItem>Hướng dẫn mua hàng</ListItem>
          <ListItem>Khách hàng thân thiết</ListItem>
          <ListItem>Tri ân khách hàng</ListItem>
          <ListItem>Hệ thống Showroom</ListItem>
          <ListItem>Hệ thống khách hàng</ListItem>
          <ListItem>Đăng kí đại lí</ListItem>
          <ListItem>Liên hệ</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          Tầng 5, Tòa nhà 169, Bùi Thị Xuân, Quận Hai Bà Trưng, HN
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> (024) 3 516 0868
        </ContactItem>
        <ContactItem>
          <FaMailBulk style={{ marginRight: "10px" }} />{" "}
          hotro@donghochinhhang.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Logo = styled.h3`
  font-size: 30px;
`;
const Description = styled.p`
  margin: 20px 0;
  line-height: 25px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  svg {
    color: #3b5999;
    background-color: white;
    font-size: 25px;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
`;
