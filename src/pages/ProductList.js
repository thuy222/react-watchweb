import React from "react";
import styled from "styled-components";
import Products from "../components/Products";

function ProductList() {
  return (
    <Container>
      <Title>Đồng hồ</Title>
      <FilterContainer>
        <Filter>
          <FillterText>Filter Product</FillterText>
          <Select>
            <Option disabled selected>
              Hãng
            </Option>
            <Option>Longines</Option>
            <Option>Gucci</Option>
            <Option>Hamilton</Option>
            <Option>Edox</Option>
            <Option>Tissot</Option>
            <Option>Claude Bernard</Option>
            <Option>Balmain</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>43 mm</Option>
            <Option>42 mm</Option>
            <Option>41 mm</Option>
            <Option>40.5 mm</Option>
            <Option>38.5 mm</Option>
            <Option>38 mm</Option>
          </Select>
        </Filter>
        <Filter>
          <FillterText>Sort Product</FillterText>
          <Select>
            <Option selected>Mới nhất</Option>
            <Option>Giá</Option>
            <Option>Bán chạy</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  /* margin-left: 60px;
  margin-right: 60px; */
`;

const Title = styled.h1`
  margin: 20px 60px;
`;
const FilterContainer = styled.div`
  margin: 20px 60px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
`;
const Option = styled.option``;
