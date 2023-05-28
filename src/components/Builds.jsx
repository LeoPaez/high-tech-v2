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
  padding: 60px 0 80px;
  gap: 40px;
`
const BuildTitle = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  font-size: 32px;
  width: 340px;
  text-align: center;
`
const Highlight = styled.span`
  color: #ff6d00;
`
const BuildCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`

const Builds = () => {
  return (
    <>
      <BuildsCont>
        <BuildTitle>
          Elegí tu setup ideal para <Highlight>jugar</Highlight> y <Highlight>trabajar</Highlight>
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