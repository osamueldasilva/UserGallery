import "./styles.css"

import { NavLink } from "react-router-dom"

function Header() {
  function removeToken() {
    localStorage.removeItem("token")
  }

    return (
          <header className="header">
        <h2>GALLERY</h2>
          <nav>
            <NavLink to="/login" >
              <button onClick={removeToken}>Encerrar sessão</button>
            </NavLink>
            
          </nav>
          
      
      </header>
    )
  

}

export default Header;