import React from 'react'
import styled from "styled-components"
import CpuIcon from "../assets/img/icons/cpu-icon.png"
import GpuIcon from "../assets/img/icons/gpu-icon.png"
import RamIcon from "../assets/img/icons/ram-icon.png"
import CoolingIcon from "../assets/img/icons/cooling-icon.png"
import { Link } from "react-router-dom"

const BuildCard = styled.div`
  background-color: #292929;
  width: 300px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const CardImg = styled.img`
  width: 300px;
  height: 190px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 60%);
  mask-image: linear-gradient(to top, transparent 0%, black 60%);
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

`
const CardPriceText = styled.p`
  margin-bottom: -10px;
  font-size: 15px;
`
const CardPrice = styled.p`
  font-size: 28px;
  font-weight: 600;
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
`

const Build = ({ src, name, price, cpu, gpu, ram, cooling, id }) => {
  const buildPrice = (price * 300).toLocaleString("us")

  return (
    <>
      <Link to={`/pc-armada/${id}`}>
        <BuildCard>
          <CardImg src={src} />
          <CardName>{name}</CardName>
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