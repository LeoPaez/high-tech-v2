import React from 'react'

// Styled Components
import {
  Access,
  AccessCont,
  AccessTitle,
  AccessForm,
  AccessLabel,
  AccessInput,
  AccessSubmit
} from "./Login"
import Back from "../components/Back"

const Register = () => {
  return (
    <>
      <AccessCont>
        <Access>
          <Back whiteIcon to="/login" />
          <AccessTitle>Crea tu Cuenta</AccessTitle>
          <AccessForm>
              <AccessLabel htmlFor="usuario">Usuario</AccessLabel>
              <AccessInput 
                type="text"
                placeholder="Escribe tu usuario"
                id="usuario"
                autoComplete="on"
                required
              />
              <AccessLabel htmlFor="email">Email</AccessLabel>
              <AccessInput
                type="email"
                placeholder="Escribe tu correo"
                id="contraseña"
                autoComplete="on"
                required
              />
              <AccessLabel htmlFor="contraseña">Contraseña</AccessLabel>
              <AccessInput
                type="text"
                placeholder="Escribe tu contraseña"
                id="contraseña"
                autoComplete="on"
                required
              />
              <AccessLabel htmlFor="contraseña">Confirma tu contraseña</AccessLabel>
              <AccessInput
                type="text"
                placeholder="Escribe tu contraseña"
                id="contraseña"
                autoComplete="on"
                required
              />
              <AccessSubmit type="submit">Crear Cuenta</AccessSubmit>   
          </AccessForm>
        </Access>
      </AccessCont>
    </>
  )
}

export default Register