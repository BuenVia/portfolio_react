import { useState } from "react";
import SummaryComponent from "../components/Summary";


export default function Summary() {

    const [showSummary, setShowSummary] = useState(false)
    const [makeCall, setMakeCall] = useState(false)

    const handleClick = async () => {
        setMakeCall(true)
        setShowSummary(true)       
    }

    return (
        <div className="container">
            <h1 className="title">Summary of Skills and Experience</h1>
            <div className="row summary-container">
                {showSummary ? <SummaryComponent makeCall={makeCall} /> : 
                <div>
                    <p>Click on the button below to obtain an AI generated review of my skills and work experience.</p>
                    <p>This is generated using OpenAI's <b>'gpt-4o-mini'</b> model which is called via API.</p>
                    <a><button className="btn-summary" onClick={handleClick}>Click me...</button></a>
                </div>
                }
            </div>
        </div>
    );
  };
  
