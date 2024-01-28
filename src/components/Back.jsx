import React from 'react'

// Styled Components
import styled from "styled-components";

// React Router
import { Link } from "react-router-dom";

// Images
import BackIcon from "/assets/img/icons/back.png"
import WhiteBackIcon from "/assets/img/icons/back-white.png"

const BackButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  img {
    width: 30px;
  }
`

const Back = ({ whiteIcon, to }) => {
  return (
    <>
      <Link to={!to ? "/" : to}>
        <BackButton>
          <img src={!whiteIcon ? BackIcon : WhiteBackIcon} />
        </BackButton>
      </Link>
    </>
  )
}

export default Back