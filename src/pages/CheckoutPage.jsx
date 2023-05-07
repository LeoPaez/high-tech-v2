import React from 'react'
import styled from "styled-components"
import CartProduct from "../components/CartMenu/CartProduct"
import { MainButton } from "../components/Build"
import MPLogo from "../assets/logos/mp-logo2.webp"
import PaypalLogo from "../assets/logos/paypal-logo.png"
import BtcLogo from "../assets/logos/btc-logo.png"

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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
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
`
const CheckoutInput = styled.input`
  border: 1px solid grey;
  padding: 8px 60px 8px 8px;
  border-radius: 4px;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    transition: box-shadow 0.11s;
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
const CheckoutItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  return (
    <>
      <CheckoutCont>
        <Checkout>
          <CheckoutDetails>
            <CheckoutTitle>Detalles del pago</CheckoutTitle>
            <CheckoutForm>
              <CheckoutLabel>Nombre y apellido</CheckoutLabel>
              <CheckoutInput placeholder="Tu nombre y apellido" />
              <CheckoutLabel>Correo</CheckoutLabel>
              <CheckoutInput placeholder="Tu correo" />
              <CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel>Dirección</CheckoutLabel>
                  <CheckoutInput placeholder="Tu dirección" />
                </CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel>Ciudad</CheckoutLabel>
                  <CheckoutInput placeholder="Ciudad" />
                </CheckoutFlex>
              </CheckoutFlex>
              <CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel>Pais</CheckoutLabel>
                  <CheckoutInput placeholder="Pais" />
                </CheckoutFlex>
                <CheckoutFlex column>
                  <CheckoutLabel>Codigo Postal</CheckoutLabel>
                  <CheckoutInput placeholder="Codigo postal" />
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
              <span> (2)</span>
            </CheckoutItemsTitle>
            <CheckoutItems>
              <CartProduct />
              <CartProduct />
            </CheckoutItems>
            <CheckoutPrices>
              <CheckoutPrice>Subtotal:</CheckoutPrice>
              <CheckoutPrice>$246.000 ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Envio:</CheckoutPrice>
              <CheckoutPrice>$0 ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Total:</CheckoutPrice>
              <CheckoutPrice>$246.000 ARS</CheckoutPrice>
            </CheckoutPrices>
            <MainButton center>Finalizar compra</MainButton>
          </CheckoutOrder>
        </Checkout>
      </CheckoutCont>
    </>
  )
}

export default CheckoutPage