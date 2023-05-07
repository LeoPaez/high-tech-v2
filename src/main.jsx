import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ScrollToTop from "./helpers/ScrollToTop"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./context/Context"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <ScrollToTop />
      <App />
    </ContextProvider>
  </BrowserRouter>
)
