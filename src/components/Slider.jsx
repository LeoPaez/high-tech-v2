import React from 'react'
import styled, { keyframes } from "styled-components"
import Amd from "../assets/brands/amd-logo.png"
import AsusRog from "../assets/brands/asus-rog-logo.png"
import CoolerMaster from "../assets/brands/cooler-master-logo.png"
import Corsair from "../assets/brands/corsair-logo.png"
import Gigabyte from "../assets/brands/gigabyte-logo.png"
import Gskill from "../assets/brands/gskill-logo.svg"
import Intel from "../assets/brands/intel-logo.png"
import Kingston from "../assets/brands/kingston-logo.png"
import Nvidia from "../assets/brands/nvidia-logo.png"
import WesternDigital from "../assets/brands/western-digital-logo.png"

const scroll = keyframes`
  0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
  }
  100% {
      -webkit-transform: translateX(calc(-200px * 10));
      transform: translateX(calc(-200px * 10));
  }
`

const SlideTrack = styled.div``

const SliderCont = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin: 40px 0;
  ${SlideTrack} {
    display: flex;
    animation: ${scroll} 40s linear infinite;
    -webkit-animation: ${scroll} 40s linear infinite;
    width: calc(200px * 20);
    gap: 120px;
    height: 200px;
    justify-content: center;
    align-items: center;
  }
`
const SlideImg = styled.img`
  max-width: 180px;
  max-height: 60px;
`



const Slider = () => {
  return (
    <>
      <SliderCont>
        <SlideTrack>
          <div>
            <SlideImg src={Amd} />
          </div>
          <div>
            <SlideImg src={AsusRog} />
          </div>
          <div>
            <SlideImg src={CoolerMaster} />
          </div>
          <div>
            <SlideImg src={Corsair} />
          </div>
          <div>
            <SlideImg src={Gigabyte} />
          </div>
          <div>
            <SlideImg src={Gskill} />
          </div>
          <div>
            <SlideImg src={Intel} />
          </div>
          <div>
            <SlideImg src={Kingston} />
          </div>
          <div>
            <SlideImg src={Nvidia} />
          </div>
          <div>
            <SlideImg src={WesternDigital} />
          </div>
          <div>
            <SlideImg src={Amd} />
          </div>
          <div>
            <SlideImg src={AsusRog} />
          </div>
          <div>
            <SlideImg src={CoolerMaster} />
          </div>
          <div>
            <SlideImg src={Corsair} />
          </div>
          <div>
            <SlideImg src={Gigabyte} />
          </div>
          <div>
            <SlideImg src={Gskill} />
          </div>
          <div>
            <SlideImg src={Intel} />
          </div>
          <div>
            <SlideImg src={Kingston} />
          </div>
          <div>
            <SlideImg src={Nvidia} />
          </div>
          <div>
            <SlideImg src={WesternDigital} />
          </div>
        </SlideTrack>
      </SliderCont>
    </>
  )
}

export default Slider