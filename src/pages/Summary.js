import { useState } from "react";
import SummaryComponent from "../components/Summary";


export default function Summary() {

    const [lang, setLang] = useState(true)
    
    
    const [showSummary, setShowSummary] = useState(false)
    const [makeCall, setMakeCall] = useState(false)
    
    function handleLang() {
        setLang(prevVals => !prevVals)
    }
    
    const handleClick = async () => {
        setMakeCall(true)
        setShowSummary(true)       
    }

    return (
        <div className="container">
            <span className="mx-auto" onClick={handleLang}>{lang ? <div className="lang-btn"><img className="lang-img" src='./spain.png' alt="Spain"></img><span>ES</span></div> : <div className="lang-btn"><img className="lang-img" src='./uk.png' alt="UK"></img><span>EN</span></div>}</span>
            <h1 className="title">{lang ? "Perfil profesional" : "Summary of Skills and Experience"}</h1>
            <div className="row summary-container">
                {showSummary ? <SummaryComponent makeCall={makeCall} /> : 
                <div>
                    {lang ? 
                    <div>
                        <p>Haz clic en el botón de abajo para obtener una reseña generada por inteligencia artificial sobre mis habilidades y experiencia laboral.</p>
                        <p>Esta ha sido generada utilizando el modelo 'gpt-4o-mini' de OpenAI, llamado a través de una API.</p>
                    </div>
                    :
                    <div>
                        <p>Click on the button below to obtain an AI generated review of my skills and work experience.</p>
                        <p>This is generated using OpenAI's <b>'gpt-4o-mini'</b> model which is called via API.</p>
                    </div>
                    }
                    <button className="btn-summary" onClick={handleClick}>{lang ? "Haz Clic" : "Click Here"}</button>
                </div>
                }
            </div>
        </div>
    );
  };
  
