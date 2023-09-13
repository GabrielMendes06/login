import Sidebar from "../Sidebar/Sidebar"
import { useState } from "react";
import Home from "../../images/pagina-inicial.png"
import ESC from "../../images/x.png"

function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <header className="header">
        <div className="icon-grid">
          <img src={isMenuOpen ? ESC : Home} id="home-icon" className="icon" alt="home" onClick={toggleMenu}/>
        </div>
        <p className="header-paragraph">Welcome, {props.userName}</p>
        <Sidebar className={`sidebar ${isMenuOpen ? 'open' : ''}`} />
      </header>      
    )
}

export default Header