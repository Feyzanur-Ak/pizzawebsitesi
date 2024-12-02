import React from "react";
import styled from "styled-components";
import logo from "../pictures/logo.svg";

// Styled Components
const HeaderWrapper = styled.header`
   background: #CE2829;
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 150px; 
  padding: 0; 
`;

const Logo = styled.img`
  height: 50px;
  width: auto; 
  object-fit: contain; 
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />
    </HeaderWrapper>
  );
};

export default Header;
