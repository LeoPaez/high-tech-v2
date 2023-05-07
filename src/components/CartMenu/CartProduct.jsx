import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const ProductCont = styled.div`
  display: flex;
  width: auto;
  background-color: #ced4da;
  color: #0e1111;
  padding: 16px;
  gap: 12px;
  border-radius: 6px;
`
const ProductLink = styled(Link)`
  color: #0e1111;
`
const ProductImg = styled.img`
  width: 80px;
  margin: 0 auto;
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const ProductName = styled.p`
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
`
const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const ProductQuantityBtn = styled.button`
  background-color: #ff7900;
  border: none;
  padding: 4px 10px;
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`
const ProductQuantityNum = styled.p`
  font-weight: 700;
`

const CartProduct = ({ img, title, price, id }) => {
  const cancelLink = (e) => {
    e.preventDefault()
  }

  const productPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <ProductCont>
        <ProductLink to={`/producto/${id}`}>
          <ProductImg src="/assets/img/products/processors/ryzen-9-5900x.webp" alt="asd" />
        </ProductLink>
        <ProductInfo>
          <ProductLink to={`/producto/${id}`}>
            <ProductName>AMD Ryzen 9 5900X 3.7 GHz</ProductName>
          </ProductLink>
          <ProductPrice>$123.000</ProductPrice>
        </ProductInfo>
        <ProductQuantity>
          <ProductQuantityBtn>-</ProductQuantityBtn>
          <ProductQuantityNum>1</ProductQuantityNum>
          <ProductQuantityBtn>+</ProductQuantityBtn>
        </ProductQuantity>
      </ProductCont>
    </>
  )
}

export default CartProduct