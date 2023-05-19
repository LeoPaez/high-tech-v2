import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import CartProduct from "../components/CartMenu/CartProduct"
import { MainButton } from "../components/Build"
import MPLogo from "/assets/img/logos/mp-logo2.webp"
import PaypalLogo from "/assets/img/logos/paypal-logo.png"
import BtcLogo from "/assets/img/logos/btc-logo.png"
import { MyContext } from "../context/Context"
import { MenuItems } from "../components/CartMenu/CartMenu"
import { LinkButton } from "../components/Nav"

const CheckoutCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`
const CheckoutTitle = styled.h2`
`
const Checkout = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #e9ecef;
`
const CheckoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #FFF;
  padding: 40px 20px;
  width: 600px;
  height: 560px;
  border-radius: 6px 0 0 6px;
`
const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const CheckoutFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  gap: 20px;
  width: 100%;
`
const CheckoutLabel = styled.label`
  margin-bottom: -12px;
  font-weight: 700;
  color: #343a40;
`
const CheckoutInput = styled.input`
  border: 2px solid #ced4da;
  padding: 10px 60px 10px 8px;
  border-radius: 4px;
  :focus {
    border: 2px solid #ff4800;
    outline: none;
  }
`
const CheckoutPaymentTitle = styled.h4`
  font-size: 18px;
  margin-top: 10px;
`
const CheckoutPayments = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;

  label {
    width: 160px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid #dee2e6;
    transition: all 0.3s ease 0s;
    :hover {
      background-color: #e9ecef;
    }
  }

  img {
    width: 60px;
    border-bottom: 6px solid transparent;
    padding: 20px 31%;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
  }

  input {
    display: none;
  }

  input:checked + img {
    border-bottom: 6px solid #ffb600;
  }
`

const CheckoutOrder = styled.div`
  width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: #e9ecef;
  padding: 40px 20px;
  border-radius: 0 6px 6px 0;
`

const CheckoutItemsTitle = styled.h3`
  span {
    color: grey;
    font-size: 17px;
  }
`
const CheckoutPrices = styled.div`
  display: flex;
  justify-content: space-between;
  :last-of-type {
    border-top: 2px solid #adb5bd;
    padding: 20px 0;
  }
`
const CheckoutPrice = styled.p`
  font-weight: 700;
`

const CheckoutPage = () => {
  const { cart, quantity, totalPrice } = useContext(MyContext)
  const [shipping, setShipping] = useState(0)

  useEffect(() => {
    if(totalPrice <= 30000 / 300 && totalPrice > 0) {
      setShipping(2000)
    } else {
      setShipping(0)
    }
    console.log(totalPrice);
  }, [totalPrice])
  

  return (
    <>
      <CheckoutCont>
        <Checkout>
          <CheckoutDetails>
            <CheckoutTitle>Detalles del pago</CheckoutTitle>
            <CheckoutForm>
              <CheckoutLabel htmlFor="name">Nombre y apellido</CheckoutLabel>
              <CheckoutInput type="text" id="name" placeholder="Tu nombre y apellido" />
              <CheckoutLabel htmlFor="email">Correo</CheckoutLabel>
              <CheckoutInput type="email" id="email" placeholder="Tu correo" />
              <CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel htmlFor="adress">Dirección</CheckoutLabel>
                  <CheckoutInput type="text" id="adress" placeholder="Tu dirección" />
                </CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel htmlFor="city">Ciudad</CheckoutLabel>
                  <CheckoutInput type="text" id="city" placeholder="Ciudad" />
                </CheckoutFlex>
              </CheckoutFlex>
              <CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel htmlFor="country">Pais</CheckoutLabel>
                  <CheckoutInput type="text" id="country" placeholder="Pais" />
                </CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel htmlFor="postalCode">Codigo Postal</CheckoutLabel>
                  <CheckoutInput type="text" id="postalCode" placeholder="Codigo postal" />
                </CheckoutFlex>
              </CheckoutFlex>
            </CheckoutForm>
            <CheckoutPaymentTitle>Metodo de pago</CheckoutPaymentTitle>
            <CheckoutPayments>
              <label htmlFor="image-check1">
                <input type="radio" name="payment method" id="image-check1" />
                <img src={MPLogo} />
              </label>
              <label htmlFor="image-check2">
                <input type="radio" name="payment method" id="image-check2" />
                <img src={PaypalLogo} />
              </label>
              <label htmlFor="image-check3">
                <input type="radio" name="payment method" id="image-check3" />
                <img src={BtcLogo} />
              </label>
            </CheckoutPayments>
          </CheckoutDetails>

          <CheckoutOrder>
            <CheckoutItemsTitle>
              Productos
              <span> ({quantity})</span>
            </CheckoutItemsTitle>
            <MenuItems>
              {
                cart.map((product) => 
                  <CartProduct
                      key={product.title}
                      id={product.id}
                      img={product.img}
                      title={product.title}
                      price={product.price}
                    />
                )
              }
            </MenuItems>
            <CheckoutPrices>
              <CheckoutPrice>Subtotal:</CheckoutPrice>
              <CheckoutPrice>${(totalPrice * 300).toLocaleString("us")} ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Envio:</CheckoutPrice>
              <CheckoutPrice>{shipping}$ ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Total:</CheckoutPrice>
              <CheckoutPrice>${((totalPrice * 300) + shipping).toLocaleString("us")} ARS</CheckoutPrice>
            </CheckoutPrices>
            <LinkButton to="/confirmacion">
              <MainButton center>Finalizar compra</MainButton>
            </LinkButton>
          </CheckoutOrder>
        </Checkout>
      </CheckoutCont>
    </>
  )
}

export default CheckoutPage