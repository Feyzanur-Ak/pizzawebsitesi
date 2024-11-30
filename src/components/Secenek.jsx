import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width:20%;
  margin: 10px;
`;

const PizzaImage = styled.img`
  width: 60%;
  border-radius: 50%;
  margin-bottom: 15px;
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
const Button = styled.button`
  background-color: #ce2829;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  `;
const Secenek = ({ menu }) => {
  const { name, image, price, subscribe, ratio } = menu;

  const history = useHistory();

  const handleClick = () => {
    history.push("/SiparisOnayi");
  }
  return (
    <MenuContainer >
      <PizzaImage src={image} alt={name}  />
      <PizzaName>{name}</PizzaName>
      <PriceContainer>{price}₺</PriceContainer>
      <DetailsContainer>
        <span>{ratio} ⭐</span>
        <span>({subscribe})</span>
      </DetailsContainer>
      <Button onClick={handleClick}>Sipariş Ver</Button>
    </MenuContainer>
  );
};

export default Secenek;
