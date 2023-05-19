import React from 'react'
import styled from "styled-components"
import Product from "./Product"
import { useContext } from "react"
import { MyContext } from "../context/Context"
import Category from "./Category"

const ProductsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #dee2e6;
  border-radius: 4px;
  padding-block: 30px;
  width: 100%;
`

const Products = () => {
  const { data } = useContext(MyContext)

  return (
    <>
      <ProductsCont>
        {
          data.map((product) => 
            <Product
              key={product.title}
              title={product.title}
              img={product.img}
              price={product.price}
              id={product.id}
              category={product.category}
            />
          )
          
        }
      </ProductsCont>
    </>
  )
}

export default Products