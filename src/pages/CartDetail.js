import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";

function CartDetail({ id, name, image, price, size }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {name}
                  </ProductName>
                  <ProductId>
                    <b>Mã sản phẩm:</b> 121212
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size</b> {size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <ButtonRemove onClick={removeFromCart}>
                    {" "}
                    Xóa sản phẩm
                    <MdDelete
                      style={{
                        marginLeft: "10px",
                        fontSize: "20px",
                      }}
                    />
                  </ButtonRemove>
                </ProductAmountContainer>
                <ProductPrice>{price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default CartDetail;

const Container = styled.div`
  margin: 0 60px;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #9caf9c;
  padding: 3px;
  border-radius: 10px;
`;
