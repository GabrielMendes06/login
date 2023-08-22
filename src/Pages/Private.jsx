import { useState, useContext, useEffect } from "react";
import Submit from "../components/Submit";
import { ThemeContext } from "../context/ThemeContext";
import Home from "../images/pagina-inicial.png"
import Help from "../images/ponto-de-interrogacao.png"

function Private() {

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme)
  },[])

  return (
    <div className="container">
      <header className="header">
        <div className="icon-grid">
          <img src={Home} id="home-icon" className="icon" alt="home" />
          <img src={Help} id="help" className="icon" alt="?" />
        </div>
        <p className="header-paragraph">Bem vindo, {theme.name}</p>
      </header>
    </div>
  );
}

export default Private;
