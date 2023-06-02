import React from 'react'

// Styled Components
import styled from "styled-components"

// Components
import Build from "./Build"

// Data
import { builds } from "../data/Builds"

const BuildsCont = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 80px;
  gap: 40px;
`
const BuildTitle = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  @media (max-width: 800px){
    font-size: 26px;
  }
  @media (max-width: 500px){
    font-size: 24px;
  }
  @media (max-width: 400px){
    font-size: 22px;
  }
`
const Highlight = styled.span`
  color: #ff6d00;
`
const BuildCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 1000px){
    gap: 30px;
  }
  @media (max-width: 950px){
    width: 60%;
  }
`

const Builds = () => {
  return (
    <>
      <BuildsCont id="builds">
        <BuildTitle>
          Elegí tu setup ideal para<br/> <Highlight>jugar</Highlight> y <Highlight>trabajar</Highlight>
        </BuildTitle>
        <BuildCards>
          {
            builds.map((build) => 
              <Build 
                key={build.id}
                src={build.img}
                title={build.title}
                price={build.price}
                cpu={build.cpu}
                gpu={build.gpu}
                ram={build.ram}
                cooling={build.cooling}
                id={build.id}
              />
            )
          }
        </BuildCards>
      </BuildsCont>
    </>
  )
}

export default Builds