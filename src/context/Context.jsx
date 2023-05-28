import React, { useState, useEffect, createContext } from 'react'

// Data
import { products } from "../data/Products";

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {

  //* Productos
  const [data, setData] = useState(products);

  //* Filtrar primera categoria que va a aparecer por default (procesadores)
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

  //* Filtrar categoria
  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.category === catItem
    })
    setData(result)
  }

  //* Logica para abrir el menu hamburguesa y carrito
  //* Si uno esta abierto el otro se cierra
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

  //* localStorage para persistir los productos en el carrito
  useEffect(() => {
    let data = localStorage.getItem("cart")
    if (data) {
      setCart(JSON.parse(data));
    }
  }, [setCart])
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  //* Cantidad de productos
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  //* Precio total del carrito
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  //* Modal al agregar producto
  const [modalOpen, setModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  //* Logica para agregar producto al carrito
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

  //* Setear el email del usuario para usarlo globalmente
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
        modalOpen,
        setModalOpen,
        addedToCart,
        addToCart,
        userEmail,
        setUserEmail
      }}
    >
      {children}
    </MyContext.Provider>
  )
}