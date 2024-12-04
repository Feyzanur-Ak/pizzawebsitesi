import React from 'react';
import styled from "styled-components";
import logo from "../pictures/logo-footer.svg";
import location from "../pictures/location.png";
import message from "../pictures/message.png";
import phone from "../pictures/phone.png";
import insta1 from "../pictures/li-0.png";
import insta2 from "../pictures/li-1.png";
import insta3 from "../pictures/li-2.png";
import insta4 from "../pictures/li-3.png";
import insta5 from "../pictures/li-4.png";
import insta6 from "../pictures/li-5.png";

const Foot = styled.footer`
  background-color: #292929;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  padding-left: 300px;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const CommunicationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  img {
    width: 30px;
    margin-right: 10px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;
    font-size: 14px;
  }

  .logo {
    width: 150px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    .logo {
      width: 120px;
    }
  }
`;

const MenuContainer = styled.div`
  flex: 1;
  text-align: left;

  h2 {
    font-size: 18px;
    margin-top: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    text-align: left;
    padding: 0 10px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const SocialContainer = styled.div`

  text-align: left;
  padding-right :25%;
  h2 {
    font-size: 18px;
    color: white;
    margin-bottom: 20px;
  }
`;


const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /*3 sutün olasun diye */
  gap: 15px; /* Resimler arasındaki boşluk */
  justify-items: center;
  margin: 0 auto;
  max-width: 100%; /* Görsellerin container'a sığmasını sağlar */

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Resmin kesilmeden düzgün şekilde sığması için */
   
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

const FooterBottom = styled.div`
  margin: 0 10px 0 0;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <Container>
        <Section>
          <CommunicationContainer>
            <img src={logo} alt="Logo" className="logo" />
            <p><img src={location} alt="Location" /> 341 Londonderry Road, Istanbul Türkiye</p>
            <p><img src={message} alt="Message" /> aciktim@teknolojik yemekler.com</p>
            <p><img src={phone} alt="Phone" /> +90 216 123 45 67</p>
          </CommunicationContainer>

          <MenuContainer>
            <h2>Sıccacık Menü</h2>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </MenuContainer>

          
        </Section>

        <SocialContainer>
          <h2>Instagram</h2>
          <ImageContainer>
            <img src={insta1} alt="Instagram 1" />
            <img src={insta2} alt="Instagram 2" />
            <img src={insta3} alt="Instagram 3" />
            <img src={insta4} alt="Instagram 4" />
            <img src={insta5} alt="Instagram 5" />
            <img src={insta6} alt="Instagram 6" />
          </ImageContainer>
        </SocialContainer>
      </Container>
     
 
      <FooterBottom>
        <p>© 2023 Teknolojik Yemekler. All rights reserved.</p>
      </FooterBottom>
    </Foot>
  );
};

export default Footer;
