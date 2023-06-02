import React from 'react';

// Styled Components
import styled from 'styled-components';

// Images
import UserIcon from "/assets/img/icons/user.png"
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  z-index: -1;
  a {
    width: 100%;
  }
  li {
    padding: 18px 20px;
    border-bottom: 2px solid #adb5bd;
    width: auto;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :first-of-type {
      margin-top: 10px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  img {
    height: 20px;
  }
  @media (max-width: 1300px) {
    display: block;
    flex-flow: column nowrap;
    background-color: #dee2e6;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 90px;
    left: 0;
    height: auto;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      color: #000;
      text-align: center;
      font-weight: 700;
      font-size: 19px;
    }
    li:hover {
      color: #464646;
    }
  }
`;

const Menu = ({ open}) => {

  return (
    <Ul open={open}>
      <a href="/">
        <li>Inicio</li>
      </a>
      <a href="#builds">
        <li>Armados</li>
      </a>
      <a href="#products">
        <li>Productos</li>
      </a>
      <a href="#contact">
        <li>Contacto</li>
      </a>
      <NavLink to="/login" style={{width: "100%"}}>
        <li>
          <img src={UserIcon} alt="" />
          Login
        </li>
      </NavLink>
    </Ul>
  )
}

export default Menu