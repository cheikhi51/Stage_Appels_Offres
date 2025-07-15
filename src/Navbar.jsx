import { useState } from "react";
import image from "/offerTrack_logo_prev_ui.png";
function Navbar(){
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return(
    <nav className="navbar">
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo-image" src={image} alt="Logo image" />
            </div>
            
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Acceuil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">À propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
                    
        </div>
      </nav> 
    )
}

export default Navbar