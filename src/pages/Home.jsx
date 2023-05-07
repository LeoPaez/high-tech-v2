import React, { useState } from 'react'
import styled from "styled-components"
import Banner from "../components/Banner"
import Carousel from "../components/Carousel"
import Builds from "../components/Builds"
import News from "../components/News"
import Categories from "../components/Categories"

export const Wrapper = styled.div`
  padding: 0 280px;
  :first-of-type {
    height: 90px;
  }
`
export const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
`

const Home = () => {
  return (
    <>
      <Banner />
      <Carousel />
      <Wrapper> 
        <Builds />
        <News />
        <Categories />
      </Wrapper>
    </>
  )
}

export default Home