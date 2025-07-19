import { useState } from "react"
import { IoIosSend } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
function Login({setShowLogin}){
    const [LoginData,setLoginData] = useState({email:"",password:""});
    const [showSendIcon,setShowSendIcon] = useState(null);
    const [showCloseIcon,setShowCloseIcon] = useState(null);
    
    const handleChange = (e)=>{
        setLoginData(prevLoginData=>({...prevLoginData, [e.target.name]:e.target.value}));
    }
    const handleLoginDataSubmit = (e)=>{
        e.preventDefault();
    }
    const handleCancelLogin = ()=>{
        setShowLogin(false);
    }
    

    const handleSendIconMouseEnter = ()=>{
        setShowSendIcon(true);
    }
    const handleSendIconMouseLeave = ()=>{
        setShowSendIcon(false);
    }

    const handleCloseIconMouseEnter = ()=>{
        setShowCloseIcon(true);
    }
    const handleCloseIconMouseLeave = ()=>{
        setShowCloseIcon(false);
    }

    return(
        <div className="login-container">
        <form className="login-form fade-element" onSubmit={handleLoginDataSubmit}>
            <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={LoginData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre.email@exemple.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={LoginData.password}
                            onChange={handleChange}
                            required
                            placeholder="votre mot de passe"
                        />
                    </div>
                    <div className="login-btns">
                        <button type="submit" className="login-submit-btn" onMouseEnter={handleSendIconMouseEnter} onMouseLeave={handleSendIconMouseLeave}>
                            Envoyer {showSendIcon && <IoIosSend className={`send-icon ${showSendIcon ? 'slide-element':''}`}  size={20}/>}
                        </button>
                        <button type="submit" className="cancel-btn" onClick={handleCancelLogin} onMouseEnter={handleCloseIconMouseEnter} onMouseLeave={handleCloseIconMouseLeave}>
                            Fermer {showCloseIcon && <IoMdCloseCircle className={`close-icon ${showCloseIcon ? 'slide-element':''}`} size={20}/>}
                        </button>
                    </div>
        </form>
        </div>
    )
}
export default Login