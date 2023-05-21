import React, { useContext } from 'react'
import styled from "styled-components"
import CheckIcon from "/assets/img/icons/check.png"
import { LinkButton } from "../components/Nav"
import { MainButton } from "../components/Build"
import { MyContext } from "../context/Context"

const SuccessCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  gap: 20px;
  span {
    color: #ff4800;
  }
`
const SuccessIcon = styled.img`
  width: 100px;
  margin-bottom: 10px;
`

const SuccessTitle = styled.h2`
  font-size: 26px;
`

const SuccessText = styled.p`
  font-size: 20px;
  text-align: center;
  width: 38%;
  span {
    font-weight: 700;
    color: #0582ca;
  }
  :last-of-type {
    margin-bottom: 20px;
  }
`

const SuccessPage = () => {
  const { userEmail } = useContext(MyContext)

  const orderId = Math.floor(Math.random() * 1000000)

  return (
    <>
      <SuccessCont>
        <SuccessIcon src={CheckIcon} />
        <SuccessTitle>
          <span>¡</span>Completaste tu compra<span>!</span>
        </SuccessTitle>
        <SuccessText>
          Te enviamos a tu correo ({userEmail}) la confirmación de compra con el detalle de tu orden junto con el enlace para seguir tu envió.
        </SuccessText>
        <SuccessText>
          El número de tu orden es: <span>{orderId}</span>
        </SuccessText>
        <LinkButton to="/">
          <MainButton center>Volver al Inicio</MainButton>
        </LinkButton>
      </SuccessCont>
    </>
  )
}

export default SuccessPage