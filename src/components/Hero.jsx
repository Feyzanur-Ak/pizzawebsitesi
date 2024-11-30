import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Hero = () => {
  const history = useHistory(); 

  const handleClick = () => {
    
    history.push("/SiparisFormu");
  };

  return (
    <main className="AnaSayfa-container">
      <header className="AnaSayfa-header">
        <h1>
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </h1>
      </header>
      <button
        onClick={handleClick}
        className="AnaSayfa-button"
        aria-label="Acıkınca Tıklayın"
      >
        ACIKTIM
      </button>
    </main>
  );
};

export default Hero;

