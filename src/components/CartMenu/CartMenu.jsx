import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CartIcon from "../../assets/icons/cart.png"
import CartProduct from "./CartProduct";
import { Cart, CartCount, LinkButton, NavIcon } from "../Nav";
import { MyContext } from "../../context/Context";
import { useContext } from "react";

const CartMenuCont = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  z-index: -1;
  flex-flow: column nowrap;
  background-color: #f8f9fa;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  top: 90px;
  right: 0;
  height: 100%;
  width: 400px;
  transition: transform 0.3s ease-in-out;
  margin: 0 auto;
  color: #343a40;
  padding: 90px 30px;
  border-left: 2px solid #dee2e6;
`
const CloseIcon = styled.p`
  position: absolute;
  top: 30px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`
const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 20px;
  }
`
const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 460px;
  overflow-y: scroll;
  gap: 20px;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 5px;
  }
`
const MenuActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 18px;
`
const Bar = styled.div`
  border-top: 3px solid #ced4da;
  width: 100%;
`
const MenuTotal = styled.div`
  display: flex;
  justify-content: space-between;
`
const MenuTotalText = styled.p`
  font-weight: 700;
`
const MenuButton = styled.button`
  width: 100%;
  background-color: ${props => props.secondary ? "transparent" : "#ff7900"};
  border: 2px solid ${props => props.secondary ? "#ff7900" : "transparent"};
  padding: 9px 0;
  border-radius: 6px;
  color: ${props => props.secondary ? "#0e1111" : "#FFF"};
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #ff7900;
    color: #FFF;
  }
`

const Menu = () => {
  const { openCart, setOpenCart } = useContext(MyContext)

  return (
    <CartMenuCont open={openCart}>
      <CloseIcon onClick={() => setOpenCart(!openCart)}>X</CloseIcon>
      <MenuInfo>
        <h3>Tus productos</h3>
        <MenuItems>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </MenuItems>
      </MenuInfo>
      <MenuActions>
        <Bar />
        <MenuTotal>
          <MenuTotalText>Total:</MenuTotalText>
          <p>$0 ARS</p>
        </MenuTotal>
        <LinkButton to="/checkout" onClick={() => setOpenCart(!openCart)}>
          <MenuButton>Comprar</MenuButton>
        </LinkButton>
        <MenuButton secondary>
          Vaciar carrito
        </MenuButton>
      </MenuActions>
    </CartMenuCont>
  )
}

const CartMenu = () => {
  const { setOpenCart, openCartMenu } = useContext(MyContext)
  
  useEffect(() => {
    const handleScroll = () => {
      setOpenCart(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpenCart]);
  
  return (
    <>
      <Menu />
      <Cart onClick={openCartMenu}>
        <NavIcon src={CartIcon} />
        <CartCount>0</CartCount>
      </Cart>
    </>
  )
}

export default CartMenu