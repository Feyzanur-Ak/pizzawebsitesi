import React from 'react'
import styled from 'styled-components'
import nav1 from "../pictures/1.svg";
import nav2 from "../pictures/2.svg";
import nav3 from "../pictures/3.svg";
import nav4 from "../pictures/4.svg";
import nav5 from "../pictures/5.svg";
import nav6 from "../pictures/6.svg";
import kart1 from "../pictures/kart-1.png";
import kart2 from "../pictures/kart-2.png";
import kart3 from "../pictures/kart-3.png";
import { Container } from 'reactstrap';



const Navbar=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
margin: 10px;
font-family: 'Roboto Condensed', sans-serif;


`;

const ImageSection=styled.div`
display: flex;
justify-content: space-around;
align-items: center;

`;

const ImageContainer=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
margin: 10px;
border-radius: 10px;
`;

const ImageContainer2=styled.div`
display: flex;
border-radius: 10px;
`;

const ImageCard=styled.div`
margin-top: 20px;
`;

ImageCard1=styled.div`
margin-top: 20px;
`;
const Content = styled.div`
  padding: 20px;
  color: white;
  position: absolute;

  h2{
    font-size: 50px;
    font-weight: 200;
    letter-spacing: 2px;
}

p{
    display: flex;
    align-items: center;
    gap: 10px;
}
`;

const Button = styled.button`
  background-color: white;
  color: #CE2829;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 25px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const MenuSection = () => {
  return (
    <Container >
    <Navbar>
     <p> <img src={nav1} /> YENİ! Kore</p>
     <p> <img src={nav2} /> Pizza</p> 
     <p> <img src={nav3} /> Burger</p>
     <p> <img src={nav4} />Kızartmalar </p>
     <p> <img src={nav5} /> Fast-Food</p>
     <p> <img src={nav6} /> Gazlı İçecekler</p>
    </Navbar>
    <ImageSection>
    <ImageContainer>
    <img src={kart1} />
        <Content>
            <h2>Özel Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <Button>SİPARİŞ VER</Button>
        </Content>
    </ImageContainer>
   <ImageContainer2> 
    <ImageCard>
    <img src={kart2} /> 
    </ImageCard> 
    <ImageCard1>
    <img src={kart3} /> 
    </ImageCard1>
    </ImageContainer2>
   
    </ImageSection>
    </Container>
  )
}

export default MenuSection
