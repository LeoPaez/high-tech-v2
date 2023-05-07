import React from 'react'
import styled from "styled-components"
import { MainButton } from "./Build"
import { Link } from "react-router-dom"

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #FFF;
  color: #0e1111;
  padding: 16px;
  gap: 12px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const ProductImg = styled.img`
  width: 160px;
  margin: 0 auto;
`
const ProductName = styled.p`
  font-size: 16px;
  min-height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
`

const Product = ({ img, title, price, id }) => {
  const cancelLink = (e) => {
    e.preventDefault()
  }

  const productPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <Link to={`/producto/${id}`}>
        <ProductCont>
          <ProductImg src={img} alt={title} />
          <ProductName>{title}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <MainButton onClick={cancelLink}
            pad="8px 38px"
          >
            Agregar al carrito
          </MainButton>
        </ProductCont>
      </Link>
    </>
  )
}

export default Product