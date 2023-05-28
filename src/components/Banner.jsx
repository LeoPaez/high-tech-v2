import React from 'react'

// Styled Components
import styled from "styled-components"

const BannerCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6d00;
  padding: 10px 0;
`
const BannerText = styled.p`
  color: #FFF;
  font-size: 22px;
`
const BannerTextSpan = styled.span`
  font-weight: 700;
`

const Banner = () => {
  return (
    <>
      <BannerCont>
        <BannerText>
          Envio <BannerTextSpan>gratis</BannerTextSpan> a partir de los <BannerTextSpan>$30.000</BannerTextSpan> en <BannerTextSpan>24hs</BannerTextSpan>
        </BannerText>
      </BannerCont>
    </>
  )
}

export default Banner