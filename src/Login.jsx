import { useState } from "react"

function Login({setShowLogin}){
    const [LoginData,setLoginData] = useState({email:"",password:""});
    
    const handleChange = (e)=>{
        setLoginData(prevLoginData=>({...prevLoginData, [e.target.name]:e.target.value}));
    }
    const handleLoginDataSubmit = (e)=>{
        e.preventDefault();
    }
    const handleCancelLogin = ()=>{
        setShowLogin(false);
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
                        <button type="submit" className="login-submit-btn">
                            Envoyer
                        </button>
                        <button type="submit" className="cancel-btn" onClick={handleCancelLogin}>
                            Fermer
                        </button>
                    </div>
        </form>
        </div>
    )
}
export default Login