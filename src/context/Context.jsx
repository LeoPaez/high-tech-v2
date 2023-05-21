import React, { useState, useEffect, createContext } from 'react'
import { products } from "../data/Products";

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(products);

  const firstCategory = () => {
    const firstCategory = [];
    for (let i = 0; i < 10; i++) {
      firstCategory.push(products[i]);
    }
    setData(firstCategory)
  };

  useEffect(() => {
    firstCategory()
  }, [products])  

  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.category === catItem
    })
    setData(result)
  }

  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const openBurgerMenu = () => {
    setOpen(!open)
    setOpenCart(false)
  }
  const openCartMenu = () => {
    setOpenCart(!openCart)
    setOpen(false)
  }

  const [cart, setCart] = useState([])

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        filterResult,
        open,
        setOpen,
        openCart,
        setOpenCart,
        openBurgerMenu,
        openCartMenu,
        cart,
        setCart,
        quantity,
        totalPrice
      }}
    >
      {children}
    </MyContext.Provider>
  )
}