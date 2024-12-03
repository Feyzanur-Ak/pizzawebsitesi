import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 20%;
  margin: 2px;
  margin-bottom: 50px;
`;

const PizzaImage = styled.img`
  width: 60%;
  border-radius: 50%;
  margin-bottom: 15px;
  cursor: pointer;
`;

const PizzaName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

const PriceContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ce2829;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
`;

const Secenek = ({ activeMenu }) => {
  const { name, image, price, subscribe, ratio } = activeMenu;

  const history = useHistory();

  const handleClick = () => {
    history.push("/SiparisOlustur");
  };

  return (
    <MenuContainer>
      <PizzaImage src={image} alt={name} onClick={handleClick} />
      <PizzaName>{name}</PizzaName>
      <PriceContainer>{price}₺</PriceContainer>
      <DetailsContainer>
        <span>{ratio} ⭐</span>
        <span>({subscribe})</span>
      </DetailsContainer>
    </MenuContainer>
  );
};

export default Secenek;
