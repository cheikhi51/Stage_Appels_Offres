import { useEffect, useState } from "react"
import { IoArrowForwardCircle } from "react-icons/io5";
function Home(){
    const texts = ["analyser","optimiser","consulter","gagner"]
    const [currentIndex,setCurrentIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prevIndex => (prevIndex + 1) % (texts.length))
        }, 3000)
        return ()=> clearInterval(interval)
    },[texts.length])
    return(
        <div className="home-container" id="home">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div className="g4"></div>
            <h1 className="hero-title">
                Bienvenue sur OfferTrack
            </h1>
            <h2 className="sub-hero">
                la plateforme qui vous aide à <span className="rotating-text-container"><span className="text-element rotate-up-element" key={texts[currentIndex]} >{texts[currentIndex]}</span></span> vos appels d'offres. 
            </h2>
            <div className="btn-container">
                <button className="btn btn-primary">Commencer <IoArrowForwardCircle /></button>
                <button className="btn btn-secondary">Consulter</button>
            </div>
        </div>
    )
}
export default Home