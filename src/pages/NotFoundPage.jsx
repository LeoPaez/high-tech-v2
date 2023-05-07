import React from 'react'
import styled from "styled-components"
import { MainButton } from "../components/Build"
import { LinkButton } from "../components/Nav"

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 60vh;
  span {
    color: #ff4800;
  }
`
const ErrorTitle = styled.h2`
  font-size: 36px;
`
const ErrorSubtitle = styled.h3`
  font-size: 24px;
`
const ErrorText = styled.p`
  font-size: 20px;
  max-width: 460px;
  text-align: center;
`

const NotFoundPage = () => {
  return (
    <>
      <Error>
        <ErrorTitle>
          <span>¡</span>Upa<span>!</span> Parece que hubo un error<span>...</span>
        </ErrorTitle>
        <ErrorSubtitle>
          404 <span>-</span> Página no encontrada
          </ErrorSubtitle>
        <ErrorText>No pudimos encontrar la página que buscabas, intenta volver atras o dirigite al inicio</ErrorText>
        <LinkButton to="/">
          <MainButton center>Volver al Inicio</MainButton>
        </LinkButton>
      </Error>
    </>
  )
}

export default NotFoundPage