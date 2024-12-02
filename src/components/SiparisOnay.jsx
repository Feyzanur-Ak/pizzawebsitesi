import React from 'react'
import styled from 'styled-components'


const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center; 
  background: #CE2829;
  color: white; 
  font-family: 'Roboto Condensed', sans-serif;
  height: 100vh; 
  width: 100%;
  text-align: center;
  margin-top: -7rem;


  h1 {
    font-size: 3rem; 
    font-weight: 200; 
    letter-spacing: 2px;
    transform: scale(1, 1.2); /* Harfleri uzun yap ilki enine ikinci değer boyuna esnetir */
  
  }
`;

const SiparisOnay = () => {
  return (
    <Head>
      <h1>
        TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
      </h1>
    </Head>
  );
};

export default SiparisOnay;
