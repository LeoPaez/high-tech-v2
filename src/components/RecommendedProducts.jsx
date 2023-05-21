import React, { useEffect, useState } from 'react'
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