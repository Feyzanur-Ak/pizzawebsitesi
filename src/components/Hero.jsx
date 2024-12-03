import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/SiparisOlustur");
  };

  return (
    <main className="AnaSayfa-container">
      <header className="AnaSayfa-header">
      <h2 >
       fırsatı kaçırma
      </h2>

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
