import React from 'react'
import styled from "styled-components"
import Product from "./Product"
import { products } from "../data/Products"

export const SectionCont = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: ${props => props.marginBottom || "0"};
`
export const Title = styled.h3`
  font-size: 22px;
  align-self: flex-start;
  border-width: 0 0 4px 0;
  border-style: solid;
  border-image: linear-gradient(to right, #ff6d00, #ffb600) 1;
  padding-bottom: 8px;
  width: 100%;
  text-transform: uppercase;
`
const NewsProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

const News = () => {
  let newProducts
  const filterNewProducts = () => {
    newProducts = products.filter(
      (product => product.new === true) 
    )
  }
  filterNewProducts()

  return (
    <>
      <SectionCont marginBottom="80px">
        <Title>Últimas novedades</Title>
        <NewsProducts>
          {
            newProducts.map((product) =>
              <Product key={product.id} title={product.name} img={product.img} price={product.price} id={product.id} /> 
            )
          }
        </NewsProducts>
      </SectionCont>
    </>
  )
}

export default News