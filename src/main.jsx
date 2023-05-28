import React from 'react'
import ReactDOM from 'react-dom/client'

// App.jsx
import App from './App'

// useContext
import { ContextProvider } from "./context/Context"

// React Router
import { BrowserRouter } from "react-router-dom"

// Helpers
import ScrollToTop from "./helpers/ScrollToTop"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <ScrollToTop />
      <App />
    </ContextProvider>
  </BrowserRouter>
)
