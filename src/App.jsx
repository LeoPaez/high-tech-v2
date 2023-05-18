import './App.css'
import { Suspense, lazy } from "react";
import { Routes, Route, } from "react-router-dom"; 
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { Wrapper, Fixed } from "./pages/Home";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SuccessPage from "./pages/SuccessPage";
const ProductPage = lazy(() => import("./pages/ProductPage"));
const BuildPage = lazy(() => import("./pages/BuildPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));


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
        <Route path="/producto/:productId" element={
          <Suspense fallback={<></>}>
            <ProductPage />
          </Suspense>
          } />
        <Route path="/pc-armada/:buildId" element={
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
