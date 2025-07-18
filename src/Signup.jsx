import { useState } from "react"

function Signup({setShowSignUp}){
    const [signUpData,setSignUpData] = useState({nom:"",email:"",password:""});
    const handleChange = (e)=>{
        setSignUpData(prevSignUpData => ({...prevSignUpData,[e.target.name]:e.target.value}))
    }

    const handleSignUpSubmit = (e)=>{
        e.preventDefault();
        setSignUpData({
            nom:"",
            email:"",
            password:""
        })
    }

    const handleCancel = ()=>{
        setShowSignUp(false);
    }
    return(
            <form className="sign-up-form fade-element" onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                        <label htmlFor="nom">Nom complet *</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={signUpData.nom}
                            onChange={handleChange}
                            required
                            placeholder="Votre nom complet"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={signUpData.email}
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
                            value={signUpData.password}
                            onChange={handleChange}
                            required
                            placeholder="votre mot de passe"
                        />
                    </div>
                    <div className="sign-up-btns">
                        <button type="submit" className="sign-up-submit-btn">
                            Envoyer
                        </button>
                        <button type="submit" className="cancel-btn" onClick={handleCancel}>
                            Retour
                        </button>
                    </div>
                    
            </form>
    )
}
export default Signup