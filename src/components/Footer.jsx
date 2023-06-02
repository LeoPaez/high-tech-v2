import React from 'react'

// Styled Components
import styled from "styled-components"

// Images
import SendIcon from "/assets/img/social/send.png"
import Instagram from "/assets/img/social/instagram.png"
import Twitter from "/assets/img/social/twitter.png"
import YouTube from "/assets/img/social/youtube.png"
import TikTok from "/assets/img/social/tiktok.png"
import WhiteLogo from "/assets/img/logos/hightech-logo-white.png"

const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;
  color: #FFF;
  background-color: #242423;
`
const FooterRow = styled.div`
  display: flex;
  gap: 120px;
  padding: 60px 280px;
  font-size: 16px;
  color: #dee2e6;
  :last-of-type {
    justify-content: center;
    align-items: center;
    padding-block: 30px;
    gap: 80px;
  }
  @media (max-width: 1800px){
    padding: 60px 180px;
  }
  @media (max-width: 1600px){
    padding: 60px 120px;
    gap: 100px;
  }
  @media (max-width: 1500px){
    padding: 60px 80px;
    gap: 80px;
  }
  @media (max-width: 1300px){
    padding: 60px 60px;
    gap: 60px;
    :last-of-type {
      gap: 40px;
    }
  }
  @media (max-width: 1200px){
    gap: 40px;
  }
  @media (max-width: 1100px){
    :first-of-type {
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }
  }
  @media (max-width: 1000px){
    padding: 60px 40px;
  }
  @media (max-width: 800px){
    padding: 60px 20px;
    :last-of-type {
      gap: 30px;
    }
  }
  @media (max-width: 700px){
    :last-of-type {
      gap: 20px;
    }
  }
  @media (max-width: 600px){
    :last-of-type {
      flex-direction: column;
    }
  }
`
const FooterColumns = styled.div`
  display: flex;
  gap: 120px;
  @media (max-width: 1600px){
    gap: 100px;
  }
  @media (max-width: 1500px){
    gap: 80px;
  }
  @media (max-width: 1300px){
    gap: 60px;
  }
  @media (max-width: 1200px){
    gap: 40px;
  }
  @media (max-width: 1100px){
    gap: 80px;
  }
  @media (max-width: 800px){
    gap: 40px;
  }
  @media (max-width: 700px){
    flex-direction: column;
  }
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #dee2e6;
  @media (max-width: 1100px){
    align-items: center;
  }
`
const FootTitle = styled.h4`
  font-size: 17px;
`
const FootText = styled.p`
  :hover {
    opacity: 0.9;
  }
`
const FootLink = styled.a`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
const FootNewsletter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`
const NewsletInput = styled.input`
  background: #363635;
  border: none;
  padding: 10px 70px 8px 10px;
  border-radius: 4px 0 0 4px;
  font-size: 15px;
  ::placeholder {
    color: #ced4da;
    font-size: 16px;
  }
  :focus {
    color: #ced4da;
    outline: none;
  }
`
const NewsletButton = styled.button`
  background-color: #ff6d00;
  border: none;
  padding: 8px 10px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`
const NewsletButtonIcon = styled.img`
  width: 17px;
`
const FootSocial= styled.div`
  display: flex;
  gap: 6px;
`
const SocialCont = styled.div`
  width: 36px;
  height: 36px;
  background-color: #ff6d00;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`
const SocialIcon = styled.img`
  width: 18px;
`
const Logo = styled.img`
  width: 120px;
`
const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ced4da;
  border-radius: 2px;
  @media (max-width: 600px){
    display: none;
  }
`
const Rights = styled.p`
  white-space: nowrap;
`

const Footer = () => {
  return (
    <>
      <FooterCont id="contact">
        <FooterRow>
          <FooterColumns>
            <FooterColumn>
              <FootTitle>Quiénes somos</FootTitle>
              <FootLink>Sobre nosotros</FootLink>
              <FootLink>Seguimiento de envíos</FootLink>
              <FootLink>Preguntas frecuentes</FootLink>
              <FootLink>Soporte</FootLink>
            </FooterColumn>
            <FooterColumn>
              <FootTitle>Recursos</FootTitle>
              <FootLink>Términos de uso</FootLink>
              <FootLink>Políticas de privacidad</FootLink>
              <FootLink>Garantías</FootLink>
              <FootLink>Devoluciones</FootLink>
            </FooterColumn>
            <FooterColumn>
              <FootTitle>Atención al cliente</FootTitle>
              <FootText>consultas@hightech.com.ar</FootText>
              <FootText>1111-222-3333</FootText>
              <FootText>WhatsApp: +54 9 223-111-2222</FootText>
            </FooterColumn>
          </FooterColumns>
          <FooterColumn>
            <Logo src={WhiteLogo} />
            <FootTitle>Suscribite y recibí las mejores promos</FootTitle>
            <FootNewsletter>
              <NewsletInput placeholder="Dirección de email" />
              <NewsletButton type="submit">
                <NewsletButtonIcon src={SendIcon} />
              </NewsletButton>
            </FootNewsletter>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <Line></Line>
          <Rights>Copyright &copy; 2023 - HighTech</Rights>
          <FootSocial>
            <SocialCont>
              <SocialIcon src={Instagram} />
            </SocialCont>
            <SocialCont>
              <SocialIcon src={Twitter} />
            </SocialCont>
            <SocialCont>
              <SocialIcon src={TikTok} />
            </SocialCont>
            <SocialCont>
              <SocialIcon src={YouTube} />
            </SocialCont>
          </FootSocial>
          <Line></Line>
        </FooterRow>
      </FooterCont>
    </>
  )
}

export default Footer