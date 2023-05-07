import React from 'react'
import styled from "styled-components"
import Product from "../components/Product"
import { MainButton } from "../components/Build"
import MercadoPagoLogo from "../assets/logos/mp-logo.webp"
import CheckIcon from "../assets/icons/check-icon.png"
import ShieldIcon from "../assets/icons/shield-icon.png"
import DeliveryIcon from "../assets/icons/delivery-icon.png"
import { Title } from "../components/News"
import { 
  ProductPageCont,
  ProductCont,
  ProductImgCont,
  ProductInfo,
  ProductName,
  ProductCategory,
  ProductPriceText,
  ProductPrice,
  ProductPriceMPCont,
  ProductPriceMPInfo,
  ProductPriceMPText,
  ProductPriceMP,
  MPLogo,
  ProductInstallments,
  ProductDetails,
  ProductDetail,
  ProductDetailIcon,
} from "../pages/ProductPage"
import ProductCarousel from "../components/ProductCarousel"
import { products } from "../data/Products"
import { builds } from "../data/Builds"
import { useParams } from "react-router-dom"
import RecommendedProducts from "../components/RecommendedProducts"

const BuildComponents = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`
const BuildComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const BuildComponentName = styled.p`
  color: #343a40;
  font-size: 14px;
` 
const BuildComponentSelect = styled.select`
  padding: 2px 0px 2px 6px;
  /* background-color: transparent; */
  border-radius: 4px;
  align-self: flex-start;
  border: 1px solid #adb5bd;
  color: #343a40;
  width: 60%;
  :focus {
    border: 1px solid #ff4800;
    outline: none;
  }
`
const BuildComponentOption = styled.option`
`

const BuildPage = () => {
  const {buildId} = useParams()
  const build = builds.find(build => build.id === parseInt(buildId))
  const buildPrice = (build.price * 300).toLocaleString("us")
  const buildPriceMP = ((build.price * 300) * 1.2).toLocaleString("us")
  const buildInstallments = ((build.price * 300) / 12).toLocaleString("us")

  return (
    <> 
      <ProductPageCont>
        <ProductCont>
          <ProductImgCont>
            <ProductCarousel
              imgProduct={build.img}
              imgCpu={build.components.img.cpu}
              imgGpu={build.components.img.gpu}
              imgRam={build.components.img.ram}
            />
          </ProductImgCont>
          <ProductInfo>
            <ProductName>Pc Armada {build.name}</ProductName>
            <ProductCategory>{build.category}</ProductCategory>
            <ProductPriceText>Precio efectivo o transferencia</ProductPriceText>
            <ProductPrice>${buildPrice}</ProductPrice>
            <ProductPriceMPCont>
              <ProductPriceMPInfo>
                <ProductPriceMPText>Precio con Mercado Pago</ProductPriceMPText>
                <ProductPriceMP>${buildPriceMP}</ProductPriceMP>
              </ProductPriceMPInfo>
              <MPLogo src={MercadoPagoLogo} />
            </ProductPriceMPCont>
            <ProductInstallments>12 cuotas sin interes de ${buildInstallments}</ProductInstallments>
            <BuildComponents>
              <BuildComponent>
                <BuildComponentName>Procesador</BuildComponentName>
                <BuildComponentSelect name="selectedCpu" defaultValue="default">
                  <BuildComponentOption value="default" disabled>
                    Selecciona una opción
                  </BuildComponentOption>
                  <BuildComponentOption value="cpuA">{build.components.cpu[0]}</BuildComponentOption>
                  <BuildComponentOption value="cpuB">{build.components.cpu[1]}</BuildComponentOption>
                </BuildComponentSelect>
              </BuildComponent>
              <BuildComponent>
                <BuildComponentName>Placa de Video</BuildComponentName>
                <BuildComponentSelect name="selectedGpu" defaultValue="default">
                  <BuildComponentOption value="default" disabled>
                    Selecciona una opción
                  </BuildComponentOption>
                  <BuildComponentOption value="gpuA">{build.components.gpu[0]}</BuildComponentOption>
                  <BuildComponentOption value="gpuB">{build.components.gpu[1]}</BuildComponentOption>
                </BuildComponentSelect>
              </BuildComponent>
              <BuildComponent>
                <BuildComponentName>Memoria Ram</BuildComponentName>
                <BuildComponentSelect name="selectedRam" defaultValue="ram" disabled>
                  <BuildComponentOption value="ram" disabled>
                  {build.components.ram}
                  </BuildComponentOption>
                </BuildComponentSelect>
              </BuildComponent>
              <BuildComponent>
                <BuildComponentName>Almacenamiento</BuildComponentName>
                <BuildComponentSelect name="selectedStorage" defaultValue="default">
                  <BuildComponentOption value="default" disabled>
                    Selecciona una opción
                  </BuildComponentOption>
                  <BuildComponentOption value="storageA">{build.components.storage[0]}</BuildComponentOption>
                  <BuildComponentOption value="storageB">{build.components.storage[1]}</BuildComponentOption>
                </BuildComponentSelect>
              </BuildComponent>
            </BuildComponents>
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

export default BuildPage