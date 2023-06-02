import React, { useState } from 'react'

// Styled Components
import styled from "styled-components"
import { MainButton } from "./Build"
import { Link } from "react-router-dom"

// Components
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import CartMenu from "./CartMenu/CartMenu"

// Images
import BlackLogo from "/assets/img/logos/hightech-logo-black.png"
import UserIcon from "/assets/img/icons/user.png"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: ${props => props.isScrolled ? "#dee2e6" : "#f8f9fa"};
  width: 100%;
  padding: 0 280px;
  transition: all 0.3s ease 0s;
  border-bottom: ${props => props.isScrolled ? "2px solid #ced4da" : "none"};
  @media (max-width: 1800px){
    padding: 0px 180px;
  }
  @media (max-width: 1600px){
    padding: 0px 120px;
  }
  @media (max-width: 1500px){
    padding: 0px 80px;
  }
  @media (max-width: 1300px){
    padding: 0px 60px;
  }
  @media (max-width: 1000px){
    padding: 0px 40px;
  }
  @media (max-width: 800px){
    padding: 0px 20px;
  }
`
const Logo = styled.img`
  width: 140px;
  opacity: 0.9;
  @media (max-width: 800px){
    width: 120px;
  }
`
const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1300px){
    display: none;
  }
`
const NavLink = styled.a`
  color: #0e1111;
  font-size: 18px;
  :hover {
    opacity: 0.8;
  }
`
export const LinkButton = styled(Link)`
  display: flex;
`

const Bar = styled.div`
  height: 26px;
  border: 1px solid #0e1111;
  opacity: 0.4;
  @media (max-width: 1300px){
    display: none;
  }
`
const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 1300px){
    display: none;
  }
`
export const NavIcon = styled.img`
  width: 28px;
`
export const Cart = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`
export const CartCount = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  background-color: #ff6d00;
  color: #FFF;
  font-size: 14px;
  border-radius: 50%;
  position: absolute;
  left: 16px;
  bottom: 16px;
`

const Nav = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <>
      <NavBar isScrolled={color}>
        <Link to="/">
          <Logo src={BlackLogo} />
        </Link>
        <NavItems>
          <NavLinks>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="#builds">Armados</NavLink>
            <NavLink href="#products">Productos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </NavLinks>
          <Bar />
          <UserActions>
            <User>
              <LinkButton to="/login">
                <MainButton
                  pad="5px 10px"
                  borderRadius="6px"
                >
                  Login
                </MainButton>
              </LinkButton>
              <LinkButton to="/login">
                <NavIcon src={UserIcon} />
              </LinkButton>
            </User>
            <CartMenu />
          </UserActions>
          <BurgerMenu />
        </NavItems>
      </NavBar>
    </>
  )
}

export default Nav