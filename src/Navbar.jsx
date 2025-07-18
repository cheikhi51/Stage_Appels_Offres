import { useEffect, useState } from "react";
import image from "/offerTrack_logo_prev_ui.png";
function Navbar({setShowSignUp,setShowLogin}){
    const [isScrolled,setIsScrolled] = useState(null);
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    
    const handleShowSignUp = ()=>{
        setShowSignUp(true);
        setShowLogin(false);
    }
    const handleShowLogin = ()=>{
        setShowLogin(true);
        setShowSignUp(false);
    }
   useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return(
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo-image" src={image} alt="Logo image" />
            </div>
            
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">À propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faq" className="nav-link">Foire Aux Questions</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contacter-nous</a>
                    </li>
                    <li className="nav-item">
                        <button className="login-btn" onClick={handleShowLogin}>Se Connecter</button>
                    </li>
                    <li className="nav-item">
                        <button className="sign-up-btn" onClick={handleShowSignUp}>Créer un compte</button>
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