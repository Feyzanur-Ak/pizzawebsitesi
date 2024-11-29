import React from 'react';
import './AnaSayfa.css';
import { useHistory } from "react-router-dom";

const AnaSayfa = () => {


    const handleClick = () => {
        

    }

  return (
    <main className="AnaSayfa-container">
      <header className="AnaSayfa-header">
        <h2>Teknolojik Yemekler</h2>
        <h1>
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </h1>
      </header>
      <button onClick={handleClick} className="AnaSayfa-button" aria-label="Acıkınca Tıklayın">
        ACIKTIM
      </button>
    </main>
  );
};

export default AnaSayfa;
