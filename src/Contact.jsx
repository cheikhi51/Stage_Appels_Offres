import { useEffect, useState } from "react";
import worldMap from "/world_map.png";
import { IoIosSend } from "react-icons/io";
function Contact(){
    const [formData,setFormData] = useState({nom:"",email:"",sujet:"",message:""});
    const [errorMessage,setErrorMessage]=useState(null);
    const [successMessage,setSuccessMessage] = useState(null);
    const [showSendIcon,setShowSendIcon] = useState(null);
    const handleChange = (e)=>{
        setFormData(prev => ({ ...prev , [e.target.name] : e.target.value}));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.nom == '' || formData.email == '' || formData.sujet == '' || formData.message == ''){
            setErrorMessage(true);
        }
        else{
            setSuccessMessage(true);
        }
        setFormData({
            nom:"",
            email:"",
            sujet:"",
            message:""
        })
    }

    useEffect(()=>{
        const  errorTimer = setInterval(()=>{
            setErrorMessage(false);
        },4000)

        return ()=>{ clearInterval(errorTimer)}
    },[errorMessage])

    useEffect(()=>{
        const  successTimer = setInterval(()=>{
            setSuccessMessage(false);
        },4000)

        return ()=>{ clearInterval(successTimer)}
    },[successMessage])
    const handleMouseEnter = ()=>{
        setShowSendIcon(true);
    }
    const handleMouseLeave = ()=>{
        setShowSendIcon(false);
    }

    return(
        <div className="contact-container" id="contact">
            <h1 className="section-title">Contacter-nous</h1>
            <p className="section-description">
                Une question, un besoin spécifique ou envie d'en savoir plus ? Contactez notre équipe pour une réponse rapide et adaptée.
            </p>
            {errorMessage && 
                <div className="error-message fade-in-text">
                    Veuillez remplir le formulaire
                </div> 
            }
            {successMessage && 
                <div className="success-message fade-in-text">
                    Votre message a été envoyé avec succès
                </div>
            }
            <div className="contact-content">
            <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom complet <span>*</span></label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            placeholder="Votre nom complet"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre.email@exemple.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sujet">Sujet <span>*</span></label>
                        <input
                            type="text"
                            id="sujet"
                            name="sujet"
                            value={formData.sujet}
                            onChange={handleChange}
                            required
                            placeholder="Sujet de votre message"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message <span>*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Votre message..."
                        />
                    </div>

                    <button type="submit" className="submit-btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        Envoyer le message {showSendIcon && <IoIosSend className={`send-icon ${showSendIcon ? 'slide-element':''}`}  size={20}/>}
                    </button>
                </form>
            <img className="world-map" src={worldMap} alt="world map image" />
            </div>
        </div>
    )
}
export default Contact