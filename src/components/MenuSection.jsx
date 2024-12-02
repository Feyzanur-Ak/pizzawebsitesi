import React from 'react'
import styled from 'styled-components'
import nav1 from "../pictures/1.svg";
import nav2 from "../pictures/2.svg";
import nav3 from "../pictures/3.svg";
import nav4 from "../pictures/4.svg";
import nav5 from "../pictures/5.svg";
import nav6 from "../pictures/6.svg";


const Navbar=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
margin: 10px;
font-family: 'Roboto Condensed', sans-serif;

p{
    display: flex;
    align-items: center;
    gap: 10px;
}
`;

const MenuSection = () => {
  return (
    <Navbar>
     <p> <img src={nav1} /> YENİ! Kore</p>
     <p> <img src={nav2} /> Pizza</p> 
     <p> <img src={nav3} /> Burger</p>
     <p> <img src={nav4} />Kızartmalar </p>
     <p> <img src={nav5} /> Fast-Food</p>
     <p> <img src={nav6} /> Gazlı İçecekler</p>
    </Navbar>
  )
}

export default MenuSection
