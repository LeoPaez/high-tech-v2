import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import CartProduct from "../components/CartMenu/CartProduct"
import { MainButton } from "../components/Build"
import MPLogo from "/assets/img/logos/mp-logo2.webp"
import PaypalLogo from "/assets/img/logos/paypal-logo.png"
// import BtcLogo from "/assets/img/logos/btc-logo.png"
import { MyContext } from "../context/Context"
import { MenuItems } from "../components/CartMenu/CartMenu"
import { LinkButton } from "../components/Nav"
import { Formik, Form, Field, ErrorMessage } from "formik"

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
  height: 620px;
  border-radius: 6px 0 0 6px;
`
const CheckoutForm = styled(Form)`
  display: flex;
  flex-direction: column;
  span {
    height: 20px;
    margin-bottom: 10px;
  }
`
const CheckoutFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  column-gap: 20px;
  width: 100%;
`
const CheckoutLabel = styled.label`
  /* margin-bottom: -10px; */
  font-weight: 700;
  color: #343a40;
  margin-bottom: 8px;
`
const CheckoutInput = styled(Field)`
  border: 2px solid #ced4da;
  padding: 10px 60px 10px 8px;
  border-radius: 4px;
  :focus {
    border: 2px solid #ff4800;
    outline: none;
  }
`
const ErrorMsg = styled.p`
  color: red;
`
const CheckoutPaymentTitle = styled.h4`
  font-size: 18px;
  margin-top: 10px;
`
const CheckoutPayments = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 10px 0 20px;

  label {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid #dee2e6;
    transition: all 0.3s ease 0s;
    :hover {
      background-color: #e9ecef;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-bottom: 6px solid transparent;
    padding: 20px 30%;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
  }

  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 6px solid transparent;
    padding: 20px 0;
    text-align: center;
    vertical-align: middle;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    font-weight: 900;
    letter-spacing: 0.6px;
    color: #ff4800;
    font-size: 16px;
  }

  input {
    display: none;
  }

  input:checked + img {
    border-bottom: 6px solid #ffb600;
  }
  input:checked + p {
    border-bottom: 6px solid #ffb600;
  }
`

const CheckoutOrder = styled.div`
  width: 400px;
  height: 620px;
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
  const { cart, setCart, quantity, totalPrice, setUserEmail  } = useContext(MyContext)
  const [formCompleted, setFormCompleted] = useState("")
  const [shipping, setShipping] = useState(0)
  const [mpFee, setMpFee] = useState(1)

  const handleRadioChange = () => {
    setMpFee(1.1)
  };

  useEffect(() => {
    handleRadioChange();
  }, []);

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
            <Formik
              initialValues={{
                name: "",
                email: "",
                address: "",
                city: "",
                country: "",
                postalCode: "",
              }}
              validate={(values) => {
                const regexText = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
                const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                const regexTextNumbers = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/

                let errors = {};

                //* Validación nombre
                if(!values.name) {
                  errors.name = 'Por favor ingresa un nombre y apellido'
                } else if(!regexText.test(values.name)){
                  errors.name = 'El nombre solo puede contener letras'
                }

                //* Validación correo
                if(!values.email) {
                  errors.email = 'Por favor ingresa un correo electrónico'
                } else if(!regexEmail.test(values.email)){
                  errors.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo.'
                }

                //* Validación dirección
                if(!values.address) {
                  errors.address = 'Por favor ingresa una dirección'
                } else if(!regexTextNumbers.test(values.address)){
                  errors.address = 'La dirección solo puede contener letras y números'
                }

                //* Validación ciudad
                if(!values.city) {
                  errors.city = 'Por favor ingresa una ciudad'
                } else if(!regexText.test(values.city)){
                  errors.city = 'La ciudad solo puede contener letras y espacios'
                }

                //* Validación país
                if(!values.country) {
                  errors.country = 'Por favor ingresa un país'
                } else if(!regexText.test(values.country)){
                  errors.country = 'El país solo puede contener letras y espacios'
                }

                //* Validación código postal
                if(!values.postalCode) {
                  errors.postalCode = 'Por favor ingresa un nombre'
                } else if(!regexTextNumbers.test(values.postalCode)){
                  errors.postalCode = 'El código postal solo puede contener letras y números'
                }

                if(
                  values.name &&
                  values.email &&
                  values.address &&
                  values.city &&
                  values.country &&
                  values.postalCode
                ) {
                  setFormCompleted("/confirmacion")
                }

                return errors;
              }}
              onSubmit={(values) => {
                setUserEmail(values.email)
              }}
            >
              {( {errors, submitForm} ) => (
                <CheckoutForm>
                  <CheckoutLabel htmlFor="name">Nombre y Apellido</CheckoutLabel>
                  <CheckoutInput name="name" type="text" id="name" placeholder="Nombre Apellido"/>
                  <span><ErrorMessage name="name" component={() => (<ErrorMsg>{errors.name}</ErrorMsg>)} /></span>
                  <CheckoutLabel htmlFor="email">Correo</CheckoutLabel>
                  <CheckoutInput name="email" type="email" id="email" placeholder="tucorreo@ejemplo.com" />
                  <span><ErrorMessage name="email" component={() => (<ErrorMsg>{errors.email}</ErrorMsg>)} /></span>
                  <CheckoutFlex>
                    <CheckoutFlex column>
                      <CheckoutLabel htmlFor="address">Dirección</CheckoutLabel>
                      <CheckoutInput name="address" type="text" id="address" placeholder="Dirección" />
                      <span><ErrorMessage name="address" component={() => (<ErrorMsg>{errors.address}</ErrorMsg>)} /></span>
                    </CheckoutFlex>
                    <CheckoutFlex column>
                      <CheckoutLabel htmlFor="city">Ciudad</CheckoutLabel>
                      <CheckoutInput name="city" type="text" id="city" placeholder="Ciudad" />
                      <span><ErrorMessage name="city" component={() => (<ErrorMsg>{errors.city}</ErrorMsg>)} /></span>
                    </CheckoutFlex>
                  </CheckoutFlex>
                  <CheckoutFlex>
                    <CheckoutFlex column>
                      <CheckoutLabel htmlFor="country">País</CheckoutLabel>
                      <CheckoutInput name="country" type="text" id="country" placeholder="País" />
                      <span><ErrorMessage name="country" component={() => (<ErrorMsg>{errors.country}</ErrorMsg>)} /></span>
                    </CheckoutFlex>
                    <CheckoutFlex column>
                      <CheckoutLabel htmlFor="postalCode">Código Postal</CheckoutLabel>
                      <CheckoutInput name="postalCode" type="text" id="postalCode" placeholder="Código Postal" />
                      <span><ErrorMessage name="postalCode" component={() => (<ErrorMsg>{errors.postalCode}</ErrorMsg>)} /></span>
                    </CheckoutFlex>
                  </CheckoutFlex>
                  <CheckoutPaymentTitle>Método de pago</CheckoutPaymentTitle>
                  <CheckoutPayments>
                    <label htmlFor="image-check1">
                      <input type="radio" name="payment method" id="image-check1" defaultChecked onChange={handleRadioChange} />
                      <img src={MPLogo} />
                    </label>
                    <label htmlFor="image-check2">
                      <input type="radio" name="payment method" id="image-check2" onChange={() => setMpFee(1)} />
                      <img src={PaypalLogo} />
                    </label>
                    <label htmlFor="image-check3">
                      <input type="radio" name="payment method" id="image-check3" onChange={() => setMpFee(1)} />
                      <p>Efectivo</p>
                    </label>
                    <label htmlFor="image-check4">
                      <input type="radio" name="payment method" id="image-check4" onChange={() => setMpFee(1)} />
                      <p>Transferencia</p>
                    </label>
                  </CheckoutPayments>
                  <LinkButton to={formCompleted} onClick={submitForm}>
                    <MainButton type="submit" center onClick={() => { if(formCompleted === "/confirmacion") setCart([]) }}>Finalizar compra</MainButton>
                  </LinkButton>
                </CheckoutForm>
              )}
            </Formik>
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
                      category={product.category}
                    />
                )
              }
            </MenuItems>
            <CheckoutPrices>
              <CheckoutPrice>Subtotal:</CheckoutPrice>
              <CheckoutPrice>${(totalPrice * 300).toLocaleString("us")} ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Envió:</CheckoutPrice>
              <CheckoutPrice>{shipping}$ ARS</CheckoutPrice>
            </CheckoutPrices>
            <CheckoutPrices>
              <CheckoutPrice>Total:</CheckoutPrice>
              <CheckoutPrice>${(((totalPrice * 300) + shipping) * mpFee).toLocaleString("us")} ARS</CheckoutPrice>
            </CheckoutPrices>
          </CheckoutOrder>
        </Checkout>
      </CheckoutCont>
    </>
  )
}

export default CheckoutPage