import { useState, useEffect } from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";

function Header() {
  
  // * Função de encerrar a aplicação remover o Token do localStorage
  function removeToken() {
    localStorage.removeItem("token");
  }

  // * Função pra pegar o name do localStorage
  const [name] = useState(
    JSON.parse(localStorage.getItem("name").toUpperCase())
  );

  return (
    <>
      <div className="titleGreeting">
        <h1>Seja bem-vindo {name}</h1>
      </div>
      <header className="header">
        <h2>GALLERY</h2>

        <nav>
          <NavLink to="/login">
            <button onClick={removeToken}>Encerrar sessão</button>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
