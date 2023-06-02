import React from 'react'

// Styled Components
import styled from "styled-components"

// React Router
import { Link } from "react-router-dom"

// Images
import CpuIcon from "/assets/img/icons/cpu-icon.png"
import GpuIcon from "/assets/img/icons/gpu-icon.png"
import RamIcon from "/assets/img/icons/ram-icon.png"
import CoolingIcon from "/assets/img/icons/cooling-icon.png"

const BuildCard = styled.div`
  background-color: #292929;
  width: 300px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  color: #FFF;
  @media (max-width: 1300px){
    width: 260px;
  }
`
const CardImg = styled.img`
  width: 300px;
  height: 190px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 60%);
  mask-image: linear-gradient(to top, transparent 0%, black 60%);
  @media (max-width: 1300px){
    width: 260px;
    height: 170px;
  }
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 26px 20px 20px;
`
const CardName = styled.p`
  position: absolute;
  top: 160px;
  left: 10px;
  font-weight: 600;
  font-size: 36px;
  font-style: italic;
  text-transform: uppercase;
  @media (max-width: 1300px){
    font-size: 30px;
  }
`
const CardPriceText = styled.p`
  margin-bottom: -10px;
  font-size: 15px;
  @media (max-width: 1300px){
    font-size: 14px;
    margin-top: 8px;
  }
`
const CardPrice = styled.p`
  font-size: 28px;
  font-weight: 600;
  @media (max-width: 1300px){
    font-size: 24px;
  }
`
export const MainButton = styled.button`
  align-self: flex-start;
  color: #FFF;
  border: none;
  background: rgb(255,136,0);
  background: linear-gradient(90deg, rgba(255,109,0,1) 0%, rgba(255,133,0,1) 100%);
  border-radius: ${props => props.borderRadius || "4px"};
  font-size: ${props => props.fontSize || "16px"};
  padding: ${props => props.pad || "10px 14px"};
  margin: ${props => props.center ? "0 auto" : "null"};
  transition: all 0.3s ease 0s;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`
const CardSpec = styled.div`
  display: flex;
  gap: 6px;
  :first-of-type {
    margin-top: 10px;
  }
`
const CardSpecIcon = styled.img`
  width: 22px;
`
const CardSpecText = styled.div`
  @media (max-width: 1300px){
    font-size: 14px;
  }
`

const Build = ({ id, src, title, price, cpu, gpu, ram, cooling }) => {
  const buildPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <Link to={`/pc-armada/${title}`}>
        <BuildCard>
          <CardImg src={src} />
          <CardName>{title}</CardName>
          <CardInfo>
            <CardPriceText>Desde</CardPriceText>
            <CardPrice>${buildPrice}</CardPrice>
              <MainButton
                pad="6px 24px"
                borderRadius="6px"
              >
                Personalizar
              </MainButton>
            <CardSpec>
              <CardSpecIcon src={CpuIcon} />
              <CardSpecText>{cpu}</CardSpecText>
            </CardSpec>
            <CardSpec>
              <CardSpecIcon src={GpuIcon} />
              <CardSpecText>{gpu}</CardSpecText>
            </CardSpec>
            <CardSpec>
              <CardSpecIcon src={RamIcon} />
              <CardSpecText>{ram}</CardSpecText>
            </CardSpec>
            <CardSpec>
              <CardSpecIcon src={CoolingIcon} />
              <CardSpecText>{cooling}</CardSpecText>
            </CardSpec>
          </CardInfo>
        </BuildCard>
      </Link>
    </>
  )
}

export default Build