import React from 'react';

// Styled Components
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  z-index: -1;
  li {
    padding: 18px 20px;
    border-bottom: 1px solid #6c757d;
    width: auto;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :hover {
      color: #CED4DA;
    }
    :first-of-type {
      margin-top: 10px;
    }
  }
  @media (max-width: 900px) {
    display: block;
    flex-flow: column nowrap;
    background-color: #495057;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 90px;
    left: 0;
    height: auto;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const Menu = ({ open}) => {

  return (
    <Ul open={open}>
      <a href="/">
        <li>Hola</li>
      </a>
      <a href="/">
        <li>Hola</li>
      </a>
      <a href="/">
        <li>Hola</li>
      </a>
      <a href="/">
        <li>Hola</li>
      </a>
    </Ul>
  )
}

export default Menu