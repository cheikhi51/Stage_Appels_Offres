import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import loadingImage from "/circle_logo.png"
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Faq from './Faq'
import Secteurs from './Secteurs'
import Signup from './Signup'
import Login from './Login'
function App() {

  const [isLoading,setIsLoading] = useState(true);
  const [showSignUp,setShowSignUp] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  useEffect(()=>{
    const interval = setInterval(()=>{
        setIsLoading(false);
    },6000)

    return ()=>{
      clearInterval(interval);
    }
    
  },[])
  if(isLoading){
    return (

          <div class="logo-loader">
            <img src={loadingImage} alt="circle" class="logo-circle" />
            <div class="logo-text">OFFER<span>TRACK</span></div>
          </div>
    );
  }
  return (
    <>
      <Navbar setShowSignUp={setShowSignUp} setShowLogin={setShowLogin}/>
      {(showSignUp && !showLogin) && <Signup showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>}
      {(showLogin && !showSignUp) && <Login showLogin={showLogin}  setShowLogin={setShowLogin}/>}
      <Home />
      <About />
      <Services />
      <Secteurs />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
