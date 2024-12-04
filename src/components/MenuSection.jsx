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


const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 200px;
  margin: 10px;
  font-family: "Roboto Condensed", sans-serif;
  flex-wrap: wrap; /* Öğelerin sarılmasına izin veriyoruz */
  
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

  @media (max-width: 768px) {
    padding: 15px 20px;
    justify-content: space-between; /* Öğeleri ikiye bölerek hizalayalım */
    
    p {
      font-size: 14px;
      width: 48%; 
      margin-bottom: 10px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  padding: 100px 150px;
  justify-content: center;
  align-items: center;
  background-color: #faf7f2;
 

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 30px 20px;
  }
`;

const ImageContainer = styled.div`
  background-color: #ce2829;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }
`;

const RightImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: none;
  position: relative;

  img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
    margin: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px; 
  }
`;

const Content = styled.div`
position: absolute;
left: 23%; 
transform: translate(-50%, -50%);
color: white;

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
  color: white;
}

@media (max-width: 768px) {
  left: 25%;
  top:25%;
  transform: translate(-50%, -50%);
 
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 14px;
  }
}
`;

const Content1 = styled.div`
  position: absolute;
  left: 40px;
  top: 20px; 
  color: black;
  background-color: transparent;

  @media (max-width: 768px) {
    left: 20px;
    top: 20px;
  }
`;

const Content2 = styled.div`
  position: absolute;
  left: 40px;
  top: 60%;
  color: black;
  background-color: transparent;

  @media (max-width: 768px) {
    left: 20px;
    top: 200px; 
  }
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

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 12px;
  }
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

     
      <ImageSection>
        
        <ImageContainer>
          <img src={kart1}  alt="Pizza"  style={{borderRadius: "20px"}}/>
          <Content>
            <h1>Özel <br /> Lezzetus</h1>
            <p>Position: Absolute Acı Burger</p>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
          </Content>
        </ImageContainer>

        {/* Right Block */}
        <RightImages>
          <div>
            <Content1>
              <h2 style={{ color: "white" }}>Hackathlon <br /> Burger Menü</h2>
              <Button onClick={handleClick}>SİPARİŞ VER</Button>
            </Content1>
            <img src={kart2} alt="Hackathlon" />
            <Content2>
              <h2> <span style={{ color: "red" }}>Çooook</span> Hızlı <br /> npm gibi kurye</h2>
              <Button onClick={handleClick}>SİPARİŞ VER</Button>
            </Content2>
            <img src={kart3} alt="Kurye" />
          </div>
        </RightImages>
      </ImageSection>
    </Container>
  );
};

export default MenuSection;
