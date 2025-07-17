import logoImage from '/offerTrack_logo_prev_ui.png';
import { MdEmail } from "react-icons/md";
import {FaWhatsapp } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
        <div className="footer-container">
            <img className="logo-image" src={logoImage} alt="logo image" />
            <h3>© Copyrights OfferTrack All Rights Reserved</h3>
            <div className="quick-links">
                <a href="#home">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#services">Services</a>
                <a href='#faq'>Foire Aux Questions</a>
                <a href="#contact">Contacter-nous</a>
            </div>
            <div className='social-media-fonts'>
                <MdEmail className='social-media-font'/>
                <FaFacebook  className='social-media-font'/>
                <FaWhatsapp  className='social-media-font'/>
            </div>
        </div>
    )
}
export default Footer