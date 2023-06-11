import React, { useEffect, useState } from 'react'

// Styled Components
import styled from "styled-components"
import { Title } from "./News"

// Components
import Product from "./Product"

// Data
import { products } from "../data/Products"

const RelatedProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 80px;
`
const Products = styled.div`
  display: flex;
  width: 75%;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 8px;
    background-color: #ced4da;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 5px;
  }
`

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const filterRecommendedProducts = () => {
      const recommended = []
      for (let i = 0; i < 4; i++) {
        recommended.push(products[Math.floor(Math.random() * products.length)]);
      }
  
      return recommended
    }
    
    const recommended = filterRecommendedProducts();
    setRecommendedProducts(recommended);  
  }, [])

  return (
    <>
      <RelatedProducts>
        <Title>También te puede interesar</Title>
        <Products>
          {
            recommendedProducts.map((product) => 
              <Product
                key={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
                id={product.id} />
            ) 
          }
        </Products>
      </RelatedProducts>
    </>
  )
}

export default RecommendedProducts