import React, { useContext } from 'react'

// useContext
import { MyContext } from "../context/Context"

// Styled Components
import styled from "styled-components"
import { MainButton } from "../components/Build"
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
  BackContainer,
} from "../pages/ProductPage"

// React Router
import { useParams } from "react-router-dom"

// Data
import { builds } from "../data/Builds"

// Components
import ProductCarousel from "../components/ProductCarousel"
import AddModal from "../components/AddModal"
import RecommendedProducts from "../components/RecommendedProducts"

// Images
import MercadoPagoLogo from "/assets/img/logos/mp-logo.webp"
import CheckIcon from "/assets/img/icons/check-icon.png"
import ShieldIcon from "/assets/img/icons/shield-icon.png"
import DeliveryIcon from "/assets/img/icons/delivery-icon.png"
import { Wrapper } from "./Home"
import Back from "../components/Back"

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
const BuildComponentName = styled.label`
  color: #343a40;
  font-size: 14px;
  font-weight: 700;
` 
const BuildComponentSelect = styled.select`
  padding: 2px 0 2px 4px;
  background-color: #ced4da;
  border-radius: 4px;
  align-self: flex-start;
  border: 1px solid #adb5bd;
  color: #0a0a0a;
  width: 66%;
  :focus {
    border: 1px solid #ff4800;
    outline: none;
  }
  @media (max-width: 600px){
    width: 100%;
  }
`
const BuildComponentOption = styled.option`
  color: #0a0a0a;
`

const BuildPage = () => {
  const { addToCart, modalOpen, addedToCart, setModalOpen, valorDolar } = useContext(MyContext)
  
  const {buildTitle} = useParams()
  const build = builds.find(build => build.title === buildTitle)
  const buildPrice = (build.price * valorDolar).toLocaleString("us")
  const buildPriceMP = ((build.price * valorDolar) * 1.1).toLocaleString("us")
  const buildInstallments = ((build.price * valorDolar) / 12).toLocaleString("us")

  const handleClick = (e) => {
    e.preventDefault(),
    addToCart(build.id, build.img, build.title, build.price)
  }

  return (
    <> 
      <Wrapper>
        <ProductPageCont>
          <ProductCont>
            <BackContainer>
              <Back />
            </BackContainer>
            <ProductImgCont>
              <ProductCarousel
                imgProduct={build.img}
                imgCpu={build.components.img.cpu}
                imgGpu={build.components.img.gpu}
                imgRam={build.components.img.ram}
              />
            </ProductImgCont>
            <ProductInfo>
              <ProductName>Pc Armada {build.title}</ProductName>
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
              <ProductInstallments>12 cuotas sin interés de ${buildInstallments}</ProductInstallments>
              <BuildComponents>
                <BuildComponent>
                  <BuildComponentName htmlFor="cpu">Procesador</BuildComponentName>
                  <BuildComponentSelect id="cpu" name="selectedCpu" defaultValue="default">
                    <BuildComponentOption value="default" disabled>
                      Selecciona una opción
                    </BuildComponentOption>
                    <BuildComponentOption value="cpuA">{build.components.cpu[0]}</BuildComponentOption>
                    <BuildComponentOption value="cpuB">{build.components.cpu[1]}</BuildComponentOption>
                  </BuildComponentSelect>
                </BuildComponent>
                <BuildComponent>
                  <BuildComponentName htmlFor="gpu">Placa de Video</BuildComponentName>
                  <BuildComponentSelect id="gpu" name="selectedGpu" defaultValue="default">
                    <BuildComponentOption value="default" disabled>
                      Selecciona una opción
                    </BuildComponentOption>
                    <BuildComponentOption value="gpuA">{build.components.gpu[0]}</BuildComponentOption>
                    <BuildComponentOption value="gpuB">{build.components.gpu[1]}</BuildComponentOption>
                  </BuildComponentSelect>
                </BuildComponent>
                <BuildComponent>
                  <BuildComponentName htmlFor="ram">Memoria Ram</BuildComponentName>
                  <BuildComponentSelect id="ram" name="selectedRam" defaultValue="ram" disabled>
                    <BuildComponentOption value="ram" disabled>
                    {build.components.ram}
                    </BuildComponentOption>
                  </BuildComponentSelect>
                </BuildComponent>
                <BuildComponent>
                  <BuildComponentName htmlFor="storage">Almacenamiento</BuildComponentName>
                  <BuildComponentSelect id="storage" name="selectedStorage" defaultValue="default">
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

export default BuildPage