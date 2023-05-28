import React, { useContext } from 'react'

// useContext
import { MyContext } from "../context/Context"

// Styled Components
import styled from "styled-components"
import { MainButton } from "./Build"

// React Router
import { Link } from "react-router-dom"

// Components
import AddModal from "./AddModal"

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #FFF;
  color: #0e1111;
  padding: 16px;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
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

const Product = ({ id, img, title, price, category }) => {
  const { addToCart, modalOpen, addedToCart, setModalOpen } = useContext(MyContext)

  const handleClick = (e) => {
    e.preventDefault(),
    addToCart(id, img, title, price, category)
  }

  const productPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <Link to={`/producto/${title}`}>
        <ProductCont>
          <ProductImg src={img} alt={title} />
          <ProductName>{title}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <MainButton 
            onClick={handleClick}
            pad="8px 38px"
          >
            Agregar al carrito
          </MainButton>
          {addedToCart && <AddModal onClose={() => setModalOpen(false)} open={modalOpen} />}
        </ProductCont>
      </Link>
    </>
  )
}

export default Product