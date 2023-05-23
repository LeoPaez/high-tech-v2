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

  const [modalOpen, setModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = (id, img, title, price, category) => {
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
        return [...currItems, { id, img, title, price, category, quantity: 1 }];
      }
    });
    setAddedToCart(true);
    setTimeout(() => {
      setModalOpen(true); // abrir el modal inmediatamente
    }, 100);
  };

  const [userEmail, setUserEmail] = useState("")

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
        totalPrice,
        userEmail,
        setUserEmail,
        addToCart,
        modalOpen,
        setModalOpen,
        addedToCart
      }}
    >
      {children}
    </MyContext.Provider>
  )
}