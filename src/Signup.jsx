import { useState,useEffect} from "react"

function Signup({setShowSignUp}){
    const [signUpData,setSignUpData] = useState({nom:"",email:"",password:""});
    const [successMessage,setSuccessMessage] = useState(null);
    const [errorMessage,setErrorMessage]=useState(null);

    const handleChange = (e)=>{
        setSignUpData(prevSignUpData => ({...prevSignUpData,[e.target.name]:e.target.value}))
    }

    const handleSignUpSubmit = (e)=>{
        e.preventDefault();

    if (
      signUpData.nom.trim() === "" ||
      signUpData.email.trim() === "" ||
      signUpData.password.trim() === ""
    ) {
      setErrorMessage("Veuillez remplir tous les champs.");
      setSuccessMessage(null);
      return;
    }

    setSuccessMessage("Les informations sont envoyées avec succès");
    setErrorMessage(null);

    setSignUpData({
      nom: "",
      email: "",
      password: ""
    });
}

    useEffect(()=>{
            const  successTimer = setInterval(()=>{
                setSuccessMessage(false);
            },4000)
    
            return ()=>{ clearInterval(successTimer)}
        },[successMessage])

    const handleCancel = (e)=>{
        e.preventDefault();
        setShowSignUp(false);
    }
    return(
            <div className="sign-up-container">
            <form className="sign-up-form fade-element" onSubmit={handleSignUpSubmit}>
                {successMessage && 
                <div className="success-form-message fade-element">
                    Informations envoyées avec succès
                </div>
                }
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
                            Fermer
                        </button>
                    </div>
                    
            </form>
            </div>
    )
}
export default Signup