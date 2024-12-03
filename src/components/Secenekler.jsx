import React from "react";
import Menu from "../yemekMenu.js";
import Secenek from "./Secenek.jsx";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
  padding: 20px;
  background-color: #faf7f2;
`;

const Secenekler = () => {
  const secenekler = Menu.map((menu) => <Secenek key={menu.id} menu={menu} />);

  return <GridContainer>{secenekler}</GridContainer>;
};

export default Secenekler;
