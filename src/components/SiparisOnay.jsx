import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Head = styled.header`
  background: #ce2829;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Satisfy", cursive;
    font-weight: normal;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 10px;
    color: #fdc913;
  }

  h1 {
    font-size: 3rem;
    font-weight: 200;
    margin: 0;
    padding-bottom: 20px;
    border-bottom: 2px solid white;
    width: 80%;
    text-align: center;
  }
`;

const SiparisContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  width: 60%;
  border-radius: 15px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    padding-bottom: 50px;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    margin: 10px 0;
  }

  .highlight {
    font-weight: bold;
  }
`;

const SiparisToplam = styled.div`
  margin-top: 50px;
  padding: 20px;
  border: .5px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;  
  border-radius: 10px;
  margin-bottom: 50px;
  

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: normal;
  
   
  }

  p {
    font-size: 1.1rem;
    color: #ffffff;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;  
    width: 80%;  
  }

  .highlight {
    font-size: 1.2rem;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    width: 50%;  
    padding: 15px;
    margin-top: 30px;
    
    h3 {
      font-size: 1.2rem;  
    }

    p {
      font-size: 1rem;  
      width: 100%;  
      justify-content: space-between;
    }

    .highlight {
      font-size: 1.1rem; 
    }

  }
`;

const SiparisOnay = () => {
   
  const location = useLocation();
  const orderData = location.state;

  const { size, dough, extras, total, productDetails } = orderData || {};

  return (
    <Head>
      <h2>Lezzetin Yolda</h2>
      <h1>SİPARİŞİNİZ ALINDI</h1>
      <SiparisContainer>
        <h2>{productDetails.name || ""}</h2>

        <p>
          <span className="highlight">Boyut:</span> {size}
        </p>
        <p>
          <span className="highlight">Hamur:</span> {dough}
        </p>
        <p>
          <span className="highlight">Ek Malzemeler:</span> {extras?.join(", ")}
        </p>
      </SiparisContainer>

      <SiparisToplam>
        <h3>SİPARİŞ TOPLAMI</h3>
        <p>
          <span className="highlight">Seçimler</span> <span>{extras.length * 5}.00₺</span>
        </p>
        <p>
          <span className="highlight">Toplam</span> <span>{total?.toFixed(2)}₺</span>
        </p>

      </SiparisToplam>
    </Head>
  );
};

export default SiparisOnay;