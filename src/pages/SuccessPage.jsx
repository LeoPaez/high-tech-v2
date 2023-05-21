import React from 'react'
import styled from "styled-components"
import CheckIcon from "/assets/img/icons/check.png"
import { LinkButton } from "../components/Nav"
import { MainButton } from "../components/Build"

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
  width: 30%;
  margin-bottom: 20px;
`

const SuccessPage = () => {
  return (
    <>
      <SuccessCont>
        <SuccessIcon src={CheckIcon} />
        <SuccessTitle>
          <span>¡</span>Completaste tu compra<span>!</span>
        </SuccessTitle>
        <SuccessText>
          Te enviamos a tu correo la confirmación de compra con el detalle de tu orden junto con el enlace para seguir tu envió.
        </SuccessText>
        <LinkButton to="/">
          <MainButton center>Volver al Inicio</MainButton>
        </LinkButton>
      </SuccessCont>
    </>
  )
}

export default SuccessPage