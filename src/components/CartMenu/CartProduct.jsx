import React, { useContext, useRef } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { MyContext } from "../../context/Context"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ProductCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 80px;
  background-color: #ced4da;
  color: #0e1111;
  padding: 16px;
  gap: 12px;
  border-radius: 6px;
  div {
    display: flex;
    gap: 12px;
  }
`
const ProductLink = styled(Link)`
  color: #0e1111;
  display: flex;
  align-items: center;
`
const ProductImg = styled.img`
  width: 80px;
  margin: auto 0;
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const ProductName = styled.p`
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
`
const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const ProductQuantityBtn = styled.button`
  background-color: #ff7900;
  border: none;
  padding: 4px 10px;
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`
const ProductQuantityNum = styled.p`
  font-weight: 700;
`

const CartProduct = ({ id, img, title, price, category }) => {
  const {cart, setCart } = useContext(MyContext)
  const showConfirmationRef = useRef(false); // Usamos useRef en lugar de useState

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, img, title, price, quantity: 1 }];
      }
    });
  };

  const removeProduct = (id) => {
    const MySwal = withReactContent(Swal);

    setCart((currItems) => {
      const itemToDelete = currItems.find((item) => item.id === id);
  
      if (itemToDelete?.quantity === 1) {
        MySwal.fire({
          title: '¿Estás seguro?',
          text: 'Vas a eliminar este producto de tu carrito',
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
              text: 'Eliminaste el producto de tu carrito',
              icon: 'warning',
              confirmButtonColor: '#38b000',
            });
            showConfirmationRef.current = true; // Actualizamos la variable de referencia
            setCart(currItems.filter((item) => item.id !== id)); // Filtramos directamente aca
          }
        });
  
        if (showConfirmationRef.current) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems;
        }
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0
  }

  const getProductLink = () => {
    if (category) {
      return "producto";
    } else {
      return "pc-armada";
    }
    console.log(category);
  };

  const productLink = getProductLink();

  const productQuantity = getQuantityById(id)

  const productPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <ProductCont>
        <div>
          <ProductLink to={`/${productLink}/${title}`}>
            <ProductImg src={img} alt={title} />
          </ProductLink>
          <ProductInfo>
            <ProductLink to={`/producto/${title}`}>
              <ProductName>{title}</ProductName>
            </ProductLink>
            <ProductPrice>${productPrice}</ProductPrice>
          </ProductInfo>
        </div>
        <ProductQuantity>
          <ProductQuantityBtn onClick={() => {
            removeProduct(id)
          }}>-</ProductQuantityBtn>
          <ProductQuantityNum>{productQuantity}</ProductQuantityNum>
          <ProductQuantityBtn onClick={addToCart}>+</ProductQuantityBtn>
        </ProductQuantity>
      </ProductCont>
    </>
  )
}

export default CartProduct