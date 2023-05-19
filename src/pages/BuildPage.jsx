import React, { useContext } from 'react'
import styled from "styled-components"
import { MainButton } from "../components/Build"
import MercadoPagoLogo from "/assets/img/logos/mp-logo.webp"
import CheckIcon from "/assets/img/icons/check-icon.png"
import ShieldIcon from "/assets/img/icons/shield-icon.png"
import DeliveryIcon from "/assets/img/icons/delivery-icon.png"
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
import { builds } from "../data/Builds"
import { useParams } from "react-router-dom"
import RecommendedProducts from "../components/RecommendedProducts"
import { MyContext } from "../context/Context"

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
  padding: 2px 0px 2px 6px;
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
`
const BuildComponentOption = styled.option`
  color: #0a0a0a;
`

const BuildPage = () => {
  const {buildTitle} = useParams()
  const build = builds.find(build => build.title === buildTitle)
  const buildPrice = (build.price * 300).toLocaleString("us")
  const buildPriceMP = ((build.price * 300) * 1.2).toLocaleString("us")
  const buildInstallments = ((build.price * 300) / 12).toLocaleString("us")

  const { setCart } = useContext(MyContext)

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === build.id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === build.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { 
          id: build.id, 
          img: build.img, 
          title: build.title, 
          price: build.price, 
          quantity: 1 
        }];
      }
    });
  };

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
            <ProductInstallments>12 cuotas sin interes de ${buildInstallments}</ProductInstallments>
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
              onClick={addToCart}
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