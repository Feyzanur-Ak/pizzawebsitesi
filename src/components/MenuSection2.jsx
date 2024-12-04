import React, { useState } from "react";
import styled from "styled-components";
import nav1 from "../pictures/1.svg";
import nav2 from "../pictures/2.svg";
import nav3 from "../pictures/3.svg";
import nav4 from "../pictures/4.svg";
import nav5 from "../pictures/5.svg";
import nav6 from "../pictures/6.svg";
import Secenekler from "./Secenekler";
import { Container } from "reactstrap";

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  padding: 20px 0;
  font-family: "Roboto Condensed", sans-serif;
  background-color: #faf7f2;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
   
  ;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #faf7f2;

  h1 {
    font-size: 45px;
    font-family: "Oswald", serif;
    font-weight: normal;
    margin-top: -15px;
  }

  h2 {
    font-family: "Satisfy", cursive;
    color: red;
    font-weight: normal;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
      width: 80%;
      padding-left: 20px;
    }
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 35px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  box-shadow: ${(props) =>
    props.active ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "0 2px 5px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 35px;
    height: 30px;
    margin-bottom: 5px;
  }

`;
const MenuSection2 = () => {
    const [activeMenu, setActiveMenu] = useState("Pizza");

  const menuItems = [
    { id: "Ramen", label: "Ramen", icon: nav1 },
    { id: "Pizza", label: "Pizza", icon: nav2 },
    { id: "Burger", label: "Burger", icon: nav3 },
    { id: "FrenchFries", label: "French Fries", icon: nav4 },
    { id: "FastFood", label: "Fast-Food", icon: nav5 },
    { id: "SoftDrink", label: "Soft Drink", icon: nav6 },
  ];


  return (
    <Container >
      <Content>
        <h2>en çok paketlenen menüler</h2>
        <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
      </Content>
      <Navbar>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            active={activeMenu === item.id}
            onClick={() => setActiveMenu(item.id)}
          >
            <p>
              <img src={item.icon} alt={item.label} />
              {item.label}
            </p>
          </MenuItem>
        ))}
      </Navbar>
      <Secenekler activeMenu={activeMenu} />
    </Container>
  );
};

export default MenuSection2;
