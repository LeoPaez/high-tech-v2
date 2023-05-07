import React from 'react'
import { products } from "../data/Products"
import { Title } from "./News"
import Product from "./Product"
import styled from "styled-components"

const RelatedProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1000px;
`
const Products = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`

const RecommendedProducts = () => {
  let recommendedProducts = []
  const filterRecommendedProducts = () => {
    for (let i = 0; i < 4; i++) {
      recommendedProducts.push(products[Math.floor(Math.random() * products.length)]);
    }
    return recommendedProducts
  }
  filterRecommendedProducts()

  return (
    <>
      <RelatedProducts>
        <Title>También te puede interesar</Title>
        <Products>
          {
            recommendedProducts.map((product) => 
              <Product key={product.id} title={product.name} img={product.img} price={product.price} id={product.id} />
            ) 
          }
        </Products>
      </RelatedProducts>
    </>
  )
}

export default RecommendedProducts