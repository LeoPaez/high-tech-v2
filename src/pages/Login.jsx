import React from 'react'

// Styled Components
import styled from "styled-components"

// React Router
import { Link } from "react-router-dom"

// Components
import Back from "../components/Back"

export const AccessCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0 80px;
  padding: 0 20px;
`
export const Access = styled.div`
  width: 300px;
  height: ${props => (props.login ? `440px` : `520px`)};
  background-color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 40px 30px;
  gap: 20px;
  border-radius: 8px;
  @media (max-width: 400px){
    padding-inline: 20px;
  }
`
export const AccessTitle = styled.h2`
  text-align: center;
  color: #FFF;
  font-size: 26px;
  margin: 0 0 20px;
`
export const AccessForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #FFF;
`
export const AccessLabel = styled.label`

`
export const AccessInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #FFF;
  padding: 0 0 14px 0;
  font-size: 16px;
  color: #FFF;
  :focus {
    outline: none;
  }
`
export const AccessSubmit = styled.button`
  font-size: 19px;
  border-radius: 6px;
  border: none;
  background-color: #ff7900;
  color: #FFF;
  padding: 6px 0;
  margin-top: 10px;
  cursor: pointer;
  letter-spacing: 0.1;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #ff6d00;
  }
`
export const AccessLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const AccessLink = styled(Link)`
  color: #FFF;
  margin: 0;
  margin: 10px 0 0;
  font-size: 16px;
  :hover {
    text-decoration: underline;
  }
`

const Login = () => {
  return (
    <>
      <AccessCont>
      <Access login>
        <Back whiteIcon />
        <AccessTitle>Iniciar sesión</AccessTitle>
        <AccessForm>
            <AccessLabel htmlFor="usuario">Usuario</AccessLabel>
            <AccessInput
              type="text"
              placeholder="Escribe tu usuario"
              id="usuario"
              autoComplete="on"
              required
            />
            <AccessLabel htmlFor="contraseña">Contraseña</AccessLabel>
            <AccessInput
              type="password"
              placeholder="Escribe tu contraseña"
              id="contraseña"
              autoComplete="on"
              required
            />
            <AccessSubmit>Log In</AccessSubmit>
        </AccessForm>
        <AccessLinks>
          <AccessLink to="#">¿Olvidaste tu contraseña?</AccessLink>
          <AccessLink to="/registro">¿No tienes una cuenta? Regístrate</AccessLink>     
        </AccessLinks>     
      </Access>
    </AccessCont>
    </>
  )
}

export default Login