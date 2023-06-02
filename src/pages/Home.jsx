import React from 'react'

// Styled Components
import styled from "styled-components"

// Components
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
  @media (max-width: 1800px){
    padding: 0px 180px;
  }
  @media (max-width: 1600px){
    padding: 0px 120px;
  }
  @media (max-width: 1500px){
    padding: 0px 80px;
  }
  @media (max-width: 1300px){
    padding: 0px 60px;
  }
  @media (max-width: 1000px){
    padding: 0px 40px;
  }
  @media (max-width: 800px){
    padding: 0px 20px;
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