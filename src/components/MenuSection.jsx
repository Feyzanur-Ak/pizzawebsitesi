import React from "react";
import styled from "styled-components";
import nav1 from "../pictures/1.svg";
import nav2 from "../pictures/2.svg";
import nav3 from "../pictures/3.svg";
import nav4 from "../pictures/4.svg";
import nav5 from "../pictures/5.svg";
import nav6 from "../pictures/6.svg";
import kart1 from "../pictures/kart-1.png";
import kart2 from "../pictures/kart-2.png";
import kart3 from "../pictures/kart-3.png";
import { Container } from "reactstrap"; 
import { useHistory } from "react-router-dom";

// Styled Components



const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 200px;
  margin: 10px;
  font-family: "Roboto Condensed", sans-serif;

  p {
    display: flex;
    align-items: center;
    gap: 10px; 
    font-size: 16px;
    cursor: pointer;

    img {
      width: 35px;
      height: 30px;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  gap:10px;
  padding: 100px 150px;
 justify-content:center;
 align-items: center;
background-color: #faf7f2;
`;

const ImageContainer = styled.div`
  background-color: #ce2829;
  position: relative;
  width: 40%; 
  display: flex;
  flex-direction: column;
  justify-content:space-around


`;

const RightImages = styled.div`
  display: flex;
  flex-direction: column;
   width: 40%; 
  border:none;
  position: relative; 

    img {
      border-radius: 10px;
      width: 100%;
      object-fit: cover;
      margin:5px;
    }
  
`;

const Content = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  color:white;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color:white;
  }
`;

const Content1=styled.div`
  position: absolute;
  left: 40px;
  padding-top: 20px;
  color:black;
  background-color:transparent

`;

const Button = styled.button`
  background-color: white;
  color: #ce2829;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

`;

// React Component

const MenuSection = () => {

  const history = useHistory();
  const handleClick = () => {
  history.push("/SiparisOlustur");
  }

  return (
    <Container>
   
      <Navbar>
        <p>
          <img src={nav1} alt="nav1" /> YENİ! Kore
        </p>
        <p>
          <img src={nav2} alt="nav2" /> Pizza
        </p>
        <p>
          <img src={nav3} alt="nav3" /> Burger
        </p>
        <p>
          <img src={nav4} alt="nav4" /> Kızartmalar
        </p>
        <p>
          <img src={nav5} alt="nav5" /> Fast-Food
        </p>
        <p>
          <img src={nav6} alt="nav6" /> Gazlı İçecekler
        </p>
      </Navbar>

      {/* Main Image Section */}
      <ImageSection>
        {/* Left Block */}
        <ImageContainer>
        <img src={kart1} alt="Pizza" />
          <Content>
            <h1>Özel <br /> Lezzetus</h1>
            <p>Position: Absolute Acı Burger</p>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
          </Content>
        </ImageContainer>

     
        <RightImages>
          <div>
            <Content1>
              <h2 style={{ color: "white" }}>Hackathlon <br /> Burger Menü</h2>
              <Button onClick={handleClick}>SİPARİŞ VER</Button>
            </Content1>
            <img src={kart2} alt="Hackathlon" />
              <Content1>
              <h2> <span style={{ color: "red" }}>Çooook</span> Hızlı <br /> npm gibi kurye</h2>
              <Button onClick={handleClick}>SİPARİŞ VER</Button>
            </Content1>
            <img src={kart3} alt="Kurye" />
          </div>
        </RightImages>
      </ImageSection>
    </Container>
  );
};

export default MenuSection;
