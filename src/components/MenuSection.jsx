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

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px;
  font-family: "Roboto Condensed", sans-serif;
`;

const ImageSection = styled.div`
display: flex;
justify-content: space-around;
gap:-50px;
  padding: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  background-color: #ce2829;
  border-radius: 10px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  img {
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const RightImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #ce2829;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f9f5f0;
  }
`;

const MenuSection = () => {
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
          <Content>
            <h2>Özel Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <Button>SİPARİŞ VER</Button>
          </Content>
          <img src={kart1} alt="Pizza" />
        </ImageContainer>
        <RightImages>
          <img src={kart2} alt="Hackathlon" />
          <img src={kart3} alt="Kurye" />
        </RightImages>
      </ImageSection>
    </Container>
  );
};

export default MenuSection;
