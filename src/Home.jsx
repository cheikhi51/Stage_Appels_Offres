import { useEffect, useState } from "react"
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
function Home(){
    const texts = ["Analyser", "Structurer", "Anticiper", "Décider", "Remporter"];
    const [currentIndex,setCurrentIndex] = useState(0)
    const [showUpButton,setShowUpButton] = useState(null);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prevIndex => (prevIndex + 1) % (texts.length))
        }, 3000)
        return ()=> clearInterval(interval)
    },[texts.length])

    useEffect(()=>{
        const handleShowUpButton = ()=>{
            const showBtn = window.scrollY  >= 200;
            setShowUpButton(showBtn); 
        }
        window.addEventListener('scroll',handleShowUpButton);
        return ()=>{
            window.removeEventListener('scroll',handleShowUpButton);
        }
    },[window.scrollY])
    const handleUpButton = ()=>{
        window.scrollTo({top:"0px",behavior:"smooth"});
    }
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
                Gagnez en efficacité pour mieux <span className="rotating-text-container"><span className="text-element rotate-up-element" key={texts[currentIndex]}>{texts[currentIndex]}</span></span>
            </h2>

            <div className="btn-container">
                <button className="btn btn-primary">Commencer <IoArrowForwardCircle /></button>
                <button className="btn btn-secondary">Consulter</button>
            </div>

            {showUpButton && 
                <button className="up-button slide-in-text" onClick={handleUpButton}>
                    <FaAngleDoubleUp />
                </button>
            }
        </div>
    )
}
export default Home