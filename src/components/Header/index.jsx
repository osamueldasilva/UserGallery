import "./styles.css"

import { NavLink } from "react-router-dom"

function Header() {
    return (
          <header className="header">
        <h2>GALLERY</h2>
          <nav>
            <NavLink to="/home" >
              <button>Encerrar sessão</button>
            </NavLink>
            
          </nav>
          
      
      </header>
    )
  

}

export default Header;