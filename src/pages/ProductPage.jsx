import React from 'react'
import styled from "styled-components"
import Product from "../components/Product"
import { MainButton } from "../components/Build"
import MercadoPagoLogo from "/assets/img/logos/mp-logo.webp"
import CheckIcon from "/assets/img/icons/check-icon.png"
import ShieldIcon from "/assets/img/icons/shield-icon.png"
import DeliveryIcon from "/assets/img/icons/delivery-icon.png"
import { products } from "../data/Products"
import { useParams } from "react-router-dom"
import RecommendedProducts from "../components/RecommendedProducts"

export const ProductPageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  margin-top: 40px;
`
export const ProductCont = styled.div`
  display: flex;
  background-color: #dee2e6;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  gap: 20px;
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
`
export const ProductImage = styled.img`
  width: ${props => props.size || "420px"};
  border-radius: 2px;
  user-select: none;
  padding: 10px;
  background-color: ${props => props.padWhite ? "#FFF" : "null"};
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
`
export const ProductName = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
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
`
export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ff4800;
  margin-bottom: 10px;
`
export const ProductPriceMPCont = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
`
export const ProductPriceMPInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ProductPriceMPText = styled.p`
  font-size: 20px;
  color: #6c757d;
`
export const ProductPriceMP = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #6c757d;
`
export const MPLogo = styled.img`
  height: 34px;
`
export const ProductInstallments = styled.p`
  color: #ff4800;
  font-size: 20px;
  border-bottom: 1px solid #adb5bd;
  padding: 0 0 12px 0;

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
  let recommendedProducts = []
  const filterRecommendedProducts = () => {
    for (let i = 0; i < 4; i++) {
      recommendedProducts.push(products[i]);
    }
    return recommendedProducts
  }
  filterRecommendedProducts()

  const {productId} = useParams()
  const product = products.find(prod => prod.id === parseInt(productId))
  const productPrice = (product.price * 300).toLocaleString("us")
  const productPriceMP = ((product.price * 300) * 1.2).toLocaleString("us")
  const productInstallments = ((product.price * 300) / 12).toLocaleString("us")

  return (
    <> 
      <ProductPageCont>
        <ProductCont>
          <ProductImgCont>
            <ProductImage padWhite src={product.img} />
          </ProductImgCont>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
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
            <ProductInstallments>12 cuotas sin interes de ${productInstallments}</ProductInstallments>
            <ProductDetails>
              <ProductDetail>
                <ProductDetailIcon src={CheckIcon} />
                <p>Stock disponible</p>
              </ProductDetail>
              <ProductDetail>
                <ProductDetailIcon src={ShieldIcon} />
                <p>Garantia - 24 meses</p>
              </ProductDetail>
              <ProductDetail>
                <ProductDetailIcon src={DeliveryIcon} />
                <p>Envio gratis a todo el país</p>
              </ProductDetail>
            </ProductDetails>
            <MainButton
              pad="7px 60px"
              fontSize="18px"
            >
              Agregar al carrito
            </MainButton>
          </ProductInfo>
        </ProductCont>
        <RecommendedProducts />
      </ProductPageCont>
    </>
  )
}

export default ProductPage