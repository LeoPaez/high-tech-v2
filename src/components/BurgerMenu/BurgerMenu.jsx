import React, { useEffect, useRef, useContext } from 'react';

// useContext
import { MyContext } from "../../context/Context";

// Styled Components
import styled from 'styled-components';

// Components
import Menu from './Menu';

const StyledBurger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #111111;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(47deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-47deg)' : 'rotate(0)'};
    }
  }
  @media (max-width: 1300px){
    display: flex;
  }
`;

const BurgerMenu = () => {
  const { open, setOpen, openBurgerMenu } = useContext(MyContext)
  const divRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!divRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpen]);
  
  return (
    <>
      <Menu open={open} />
      <StyledBurger ref={divRef} open={open} onClick={openBurgerMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default BurgerMenu