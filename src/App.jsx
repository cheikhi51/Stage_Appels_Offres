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
function App() {

  const [isLoading,setIsLoading] = useState(true);

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
      <Navbar />
      <Home />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
