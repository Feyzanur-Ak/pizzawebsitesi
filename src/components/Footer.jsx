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
  background-color:#292929;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  padding-left: 300px;
  padding-top: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const CommunicationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
    width: 150px; /* Logo boyutu */
    margin-bottom: 20px; /* Logo alt boşluğu */
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
`;
const Section=styled.div`
  display: flex;


  
 
`;
const SocialContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;


  h2 {
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;    
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  gap: 10px;
  margin-top: 80px;

  img {
    width: 80px;
    height: 80px;    
    object-fit: cover;
  }
`;
const FooterBottom = styled.div`
  margin:0 10px 0 0;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  p {
    margin: 0;
  }

  .twitter-icon {
    width: 20px;
    height: 20px;
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
        {/* Social Section */}
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

      {/* Footer Bottom Section */}
      <FooterBottom>
        <p>© 2023 Teknolojik Yemekler. All rights reserved.</p>
      
      </FooterBottom>
    </Foot>
  );
};

export default Footer;
