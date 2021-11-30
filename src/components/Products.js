import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 10px 60px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 20px;
  }
`;
