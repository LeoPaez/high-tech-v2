import React, { useContext } from 'react'

// useContext 
import { MyContext } from "../context/Context"

// Styled Components
import styled from "styled-components"
import { MainButton } from "../components/Build"

// React Router
import { useParams } from "react-router-dom"

// Components
import AddModal from "../components/AddModal"
import RecommendedProducts from "../components/RecommendedProducts"

// Data
import { products } from "../data/Products"

// Images
import MercadoPagoLogo from "/assets/img/logos/mp-logo.webp"
import CheckIcon from "/assets/img/icons/check-icon.png"
import ShieldIcon from "/assets/img/icons/shield-icon.png"
import DeliveryIcon from "/assets/img/icons/delivery-icon.png"
import { Wrapper } from "./Home"

export const ProductPageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`
export const ProductCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #dee2e6;
  border-radius: 6px;
  gap: 20px;
  border: 1px solid #ced4da;
  @media (max-width: 1200px){
    justify-content: center;
    gap: 0;
  }
`
export const ProductImgCont = styled.div`
  width: 500px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px 0 2px 2px;
  /* border-style: solid;
  border-color: #d3d3d3;
  border-radius: 2px 0 0 2px; */
  flex-direction: column;
  border-radius: 6px 0 0 6px;
  @media (max-width: 600px){
    width: auto;
    min-height: 440px;
    padding: 0 20px;
  }
  @media (max-width: 500px){
    width: auto;
    min-height: 360px;
    padding: 0 20px;
  }
  @media (max-width: 400px){
    padding: 0 10px;
  }
`
export const ProductImage = styled.img`
  width: ${props => props.size || "420px"}; 
  border-radius: 2px;
  user-select: none;
  padding: 10px;
  background-color: ${props => props.padWhite ? "#FFF" : "null"};
  @media (max-width: 600px){
    width: 340px;
  }
  @media (max-width: 500px){
    width: 280px;
  }
  @media (max-width: 400px){
    width: 260px;
  }
`
export const ProductInfo = styled.div`
  width: 480px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-width: 2px 2px 2px 0;
  border-style: solid;
  border-color: #d3d3d3; */
  padding: 20px 20px 20px 0;
  border-radius: 0 6px 6px 0;
  @media (max-width: 1200px){
    width: 600px;
    min-height: 0;
    padding: 0 20px 30px 20px;
    button {
      width: 100%;
      padding-block: 10px;
    }
  }
  @media (max-width: 1000px){
    width: 500px;
  }
  @media (max-width: 600px){
    width: 360px;
  }
  @media (max-width: 500px){
    width: 300px;
  }
  @media (max-width: 400px){
    width: 280px;
    padding-inline: 10px;
  }
`
export const ProductName = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
  @media (max-width: 600px){
    font-size: 22px;
  }
`
export const ProductCategory = styled.p`
  color: #6c757d;
`
export const ProductPriceText = styled.p`
  font-size: 22px;
  color: #ff4800;
  margin-top: 10px;
  border-top: 1px solid #adb5bd;
  padding: 8px 0 0 0;
  @media (max-width: 600px){
    font-size: 20px;
  }
`
export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ff4800;
  margin-bottom: 10px;
  @media (max-width: 600px){
    font-size: 22px;
  }
`
export const ProductPriceMPCont = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
  @media (max-width: 600px){
    justify-content: space-between;
    gap: 0;
  }
`
export const ProductPriceMPInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ProductPriceMPText = styled.p`
  font-size: 20px;
  color: #6c757d;
  @media (max-width: 600px){
    font-size: 18px;
  }
`
export const ProductPriceMP = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #6c757d;
`
export const MPLogo = styled.img`
  height: 34px;
  @media (max-width: 600px){
    height: 30px;
  }
`
export const ProductInstallments = styled.p`
  color: #ff4800;
  font-size: 20px;
  border-bottom: 1px solid #adb5bd;
  padding: 0 0 12px 0;
  @media (max-width: 600px){
    font-size: 19px;
  }

`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  gap: 10px;
`
export const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  color: #38b000;
  font-size: 16px;
  gap: 10px;
`
export const ProductDetailIcon = styled.img`
  width: 24px;
`

const ProductPage = () => {
  const { addToCart, modalOpen, addedToCart, setModalOpen, valorDolar } = useContext(MyContext)

  const {productTitle} = useParams()
  const product = products.find(prod => prod.title === productTitle)
  const productPrice = (product.price * valorDolar).toLocaleString("us")
  const productPriceMP = ((product.price * valorDolar) * 1.1).toLocaleString("us")
  const productInstallments = ((product.price * valorDolar) / 12).toLocaleString("us")

  const handleClick = (e) => {
    e.preventDefault(),
    addToCart(product.id, product.img, product.title, product.price, product.category)
  }

  return (
    <> 
      <Wrapper>
        <ProductPageCont>
          <ProductCont>
            <ProductImgCont>
              <ProductImage padWhite src={product.img} />
            </ProductImgCont>
            <ProductInfo>
              <ProductName>{product.title}</ProductName>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductPriceText>Precio efectivo o transferencia</ProductPriceText>
              <ProductPrice>${productPrice}</ProductPrice>
              <ProductPriceMPCont>
                <ProductPriceMPInfo>
                  <ProductPriceMPText>Precio con Mercado Pago</ProductPriceMPText>
                  <ProductPriceMP>${productPriceMP}</ProductPriceMP>
                </ProductPriceMPInfo>
                <MPLogo src={MercadoPagoLogo} />
              </ProductPriceMPCont>
              <ProductInstallments>12 cuotas sin interés de ${productInstallments}</ProductInstallments>
              <ProductDetails>
                <ProductDetail>
                  <ProductDetailIcon src={CheckIcon} />
                  <p>Stock disponible</p>
                </ProductDetail>
                <ProductDetail>
                  <ProductDetailIcon src={ShieldIcon} />
                  <p>Garantía - 24 meses</p>
                </ProductDetail>
                <ProductDetail>
                  <ProductDetailIcon src={DeliveryIcon} />
                  <p>Envió gratis a todo el país</p>
                </ProductDetail>
              </ProductDetails>
              <MainButton
                pad="7px 60px"
                fontSize="18px"
                onClick={handleClick}
              >
                Agregar al carrito
              </MainButton>
              {addedToCart && <AddModal onClose={() => setModalOpen(false)} open={modalOpen} />}
            </ProductInfo>
          </ProductCont>
        </ProductPageCont>
      </Wrapper>
      <Wrapper>
        <RecommendedProducts />
      </Wrapper>
    </>
  )
}

export default ProductPage