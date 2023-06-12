import React from 'react'

// Styled Components
import styled from "styled-components"
import { MainButton } from "../components/Build"
import { LinkButton } from "../components/Nav"

const ErrorCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 60vh;
  padding: 0 20px;
  text-align: center;
  span {
    color: #ff4800;
  }
`
const ErrorTitle = styled.h2`
  font-size: 36px;
  @media (max-width: 1200px){
    font-size: 32px;
  }
  @media (max-width: 800px){
    font-size: 30px;
  }
  @media (max-width: 500px){
    font-size: 26px;
  }
`
const ErrorSubtitle = styled.h3`
  font-size: 24px;
  @media (max-width: 1200px){
    font-size: 22px;
  }
  @media (max-width: 800px){
    font-size: 20px;
  }
`
const ErrorText = styled.p`
  font-size: 20px;
  max-width: 460px;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 800px){
    font-size: 18px;
  }
`

const NotFoundPage = () => {
  return (
    <>
      <ErrorCont>
        <ErrorTitle>
          <span>¡</span>Upa<span>!</span> Parece que hubo un error<span>...</span>
        </ErrorTitle>
        <ErrorSubtitle>
          404 <span>-</span> Página no encontrada
          </ErrorSubtitle>
        <ErrorText>No pudimos encontrar la página que buscabas, intenta volver atrás o dirigite al inicio.</ErrorText>
        <LinkButton to="/">
          <MainButton center>Volver al Inicio</MainButton>
        </LinkButton>
      </ErrorCont>
    </>
  )
}

export default NotFoundPage