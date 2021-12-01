import React, { useState, useEffect } from "react";
import { MdAddShoppingCart, MdCleanHands } from "react-icons/md";
import styled from "styled-components";
import { useParams } from "react-router";
import { popularProducts } from "../data";
import { useStateValue } from "../context/StateProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        name: product.name,
        image: product.img,
        price: product.price,
        size: product.size,
      },
    });
  };

  useEffect(() => {
    const currentProduct = popularProducts.filter(
      (product) => product.id === id
    );
    setProduct(currentProduct[0]);
  }, []);

  return (
    <Container>
      {product && (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>
              Automatic/ Máy tự động lên dây cót | Nam | 39.30 x 39.30mm |
              9.80mm | Thép không gỉ 316L/ Mạ vàng công nghệ PVD | Sapphire/
              Chống trầy xước | 3 bar
            </Desc>
            <Price>{product.price}</Price>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="gold" />
                <FilterColor color="black" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterOption>43 mm</FilterOption>
                  <FilterOption>42 mm</FilterOption>
                  <FilterOption>40 mm</FilterOption>
                  <FilterOption>39 mm</FilterOption>
                  <FilterOption>38 mm</FilterOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <Button onClick={addToCart}>
                {" "}
                <MdAddShoppingCart /> Thêm vào giỏ hàng
              </Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    position: relative;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h2`
  font-weight: 400;
  padding-bottom: 20px;
`;
const Desc = styled.p`
  line-height: 25px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #e88888;
    font-size: 20px;
    padding-right: 5px;
  }
  &:hover {
    background-color: #6cdfa0;
  }
`;
