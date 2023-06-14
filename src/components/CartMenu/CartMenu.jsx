import React, { useEffect, useContext } from 'react';

// useContext
import { MyContext } from "../../context/Context";

// Styled Components
import styled, { css } from 'styled-components';
import { Cart, CartCount, LinkButton, NavIcon } from "../Nav";

// SweetAlert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Components
import CartProduct from "./CartProduct";

// Images
import CartIcon from "/assets/img/icons/cart.png"

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
  /* height: 100%; */
  height: calc(100vh - 90px);
  width: 460px;
  transition: transform 0.3s ease-in-out;
  margin: 0 auto;
  color: #343a40;
  padding: 70px 30px 40px;
  border-left: 2px solid #dee2e6;
  align-content: space-between;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 500px){
    width: 100%;
    padding-inline: 10px;
  }
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
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow: scroll;
  gap: 20px;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #ced4da;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 5px;
  }
  ${props => props.isCartMenu && css`
    @media (max-height: 900px){
      height: 45vh;
    }
    @media (max-height: 800px){
      height: 38vh;
    }
    @media (max-height: 700px){
      height: 30vh;
    }
  `}
`

const EmptyCartMsg = styled.p`
  font-size: 18px;
  margin: auto;
`
const MenuActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 18px;
  @media (max-height: 1000px){
    gap: 20px;
  }
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
  background-color: ${props => props.secondary ? "transparent" : props.disabled ? "grey" : "#ff7900"};
  border: 2px solid ${props => props.secondary ? "#ff7900" : "transparent"};
  padding: 9px 0;
  border-radius: 6px;
  color: ${props => props.secondary ? "#0e1111" : "#FFF"};
  font-weight: 700;
  font-size: 16px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #ff7900;
    background-color: ${props => props.disabled ? "grey" : "#ff7900"};
    color: #FFF;
  }
`

const Menu = () => {
  const { openCart, setOpenCart, cart, setCart, totalPrice } = useContext(MyContext)
  
  const MySwal = withReactContent(Swal)

  const clearCart = () => {
    MySwal.fire({
      title: '¿Estas seguro?',
      text: 'Vas a vaciar el contenido de tu carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#38b000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Borrado!',
          text: 'Vaciaste tu carrito',
          icon: 'warning',
          confirmButtonColor: '#38b000',
        })
        setCart([]);
      }
    })
  }

  return (
    <CartMenuCont open={openCart}>
      <CloseIcon onClick={() => setOpenCart(!openCart)}>X</CloseIcon>
      <MenuInfo>
        <h3>Tus productos</h3>
        <MenuItems isCartMenu>
          {
            cart.map((product) => 
              <CartProduct
                key={product.title}
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            )
          }
          {
            !cart.length &&
            <EmptyCartMsg>No hay productos en el carrito</EmptyCartMsg>
          }
        </MenuItems>
      </MenuInfo>
      <MenuActions>
        <Bar />
        <MenuTotal>
          <MenuTotalText>Total:</MenuTotalText>
          <p>${(totalPrice * 300).toLocaleString("us")} ARS</p>
        </MenuTotal>
        <LinkButton to="/checkout" onClick={() => setOpenCart(!openCart)}>
          <MenuButton disabled={!cart.length ? true : false}>
            Comprar
          </MenuButton>
        </LinkButton>
        <MenuButton 
          secondary={!cart.length ? false : true}
          disabled={!cart.length ? true : false}
          onClick={clearCart}
        >
          Vaciar carrito
        </MenuButton>
      </MenuActions>
    </CartMenuCont>
  )
}

const CartMenu = () => {
  const { setOpenCart, openCartMenu, quantity } = useContext(MyContext)
  
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
        <CartCount>
          <p>{quantity}</p>
        </CartCount>
      </Cart>
    </>
  )
}

export default CartMenu