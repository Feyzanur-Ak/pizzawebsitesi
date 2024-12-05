import React from "react";
import styled from "styled-components";
import Menu from "../yemekMenu.js"; // Menü verileri
import Secenek from "./Secenek.jsx";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #faf7f2;
`;

const Secenekler = ({ activeMenu }) => {
  const filteredItems = Menu[activeMenu] || []; 

  return (
    <GridContainer>
      {filteredItems.map((menu) => (
        <Secenek key={menu.id} activeMenu={menu} />
      ))}
    </GridContainer>
  );
};

export default Secenekler;
