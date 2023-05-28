import { Suspense, lazy } from "react";

// Global Styles
import './App.css'

// Styled Components
import { Wrapper, Fixed } from "./pages/Home";

// React Router
import { Routes, Route, } from "react-router-dom"; 

// Components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

// Pages
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const BuildPage = lazy(() => import("./pages/BuildPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const SuccessPage = lazy(() => import("./pages/SuccessPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Fixed>
          <Nav />
        </Fixed>
      </Wrapper>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<></>}>
            <Home /> 
          </Suspense>
          } />
        <Route path="/producto/:productTitle" element={
          <Suspense fallback={<></>}>
            <ProductPage />
          </Suspense>
          } />
        <Route path="/pc-armada/:buildTitle" element={
          <Suspense fallback={<></>}>
            <BuildPage />
          </Suspense> 
          } />
        <Route path="/checkout" element={
          <Suspense fallback={<></>}>
            <CheckoutPage />
          </Suspense>
          } />
        <Route path="/login" element={ 
          <Suspense fallback={<></>}>
            <Login />
          </Suspense>
        } />
        <Route path="/registro" element={
          <Suspense fallback={<></>}>
            <Register />
          </Suspense>
        } />
        <Route path="/confirmacion" element={
          <Suspense fallback={<></>}>
            <SuccessPage />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<></>}>
            <NotFoundPage />
          </Suspense>
        } />
      </Routes>
      <Slider />
      <Footer />
    </div>
  )
}

export default App
