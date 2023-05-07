import React, { useRef } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

export const AccessCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 80px;
`
export const Access = styled.div`
  width: 300px;
  height: ${props => (props.login ? `440px` : `520px`)};;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 40px 30px;
  gap: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.5);
  -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.5);
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
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
          <AccessLink to="/registro">¿No tienes una cuenta? Registrate</AccessLink>     
        </AccessLinks>     
      </Access>
    </AccessCont>
    </>
  )
}

export default Login