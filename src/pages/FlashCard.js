import { useState } from "react";
import sentencesArray from "../sentenceData";

const FlashCard = () => {
    
    const [isActive, setIsActive] = useState(false)
    const [index, setIndex] = useState(0);
    const [sentenceIndex, setSentenceIndex] = useState(0)
    const [answer, setAnswer] = useState("")

    const handleChoice = (e) => {
        const { value } = e.target
        setIndex(value - 1)
        setIsActive(true)
    }

    const handleClick = (e) => {
        // if (index < sentencesArray.length - 1 && answer === sentencesArray[index].answer) {
        if (index < sentencesArray[index].sentence.length - 1) {
            setSentenceIndex(val => val + 1)
        } else if (index === sentencesArray[index].sentence.length - 1) {
            console.log(('Complete'));
            setIsActive(false)
        } else {
            console.log(`Try again... ${sentencesArray[index].sentence[sentenceIndex].question}`)
        }
        setAnswer("")
    }

    const handleInput = (e) => {
        const { value } = e.target
        setAnswer(value) 
    }

    const playSound = () => {
        console.log("Play sound..");
        const speech = new SpeechSynthesisUtterance()
        if (speechSynthesis.speaking) return
        speech.lang = "es-ES"
        speech.text = sentencesArray[index].sentence[sentenceIndex].question
        speech.rate = 1
        speechSynthesis.speak(speech)
    }

    return (
        <div className="container">
            {isActive ? 
            <div className="card mt-3">
                <div className="card-header">
                    Traduce
                </div>
                <div className="card-body flash__card">
                    <div>
                        <span className="flash__sentence">{sentencesArray[index].sentence[sentenceIndex].answer} <button className="flash__btn" onClick={playSound}>&#9658;</button> </span>
                    </div>
                    <div>
                        <input type="text" className="flash__input" name="answer" onChange={handleInput} value={answer} />
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm" onClick={handleClick}>Submit</button>
                </div>

        </div>
        :
        sentencesArray.map(sentece => {
            return <button className="btn btn-sm" value={sentece.id} onClick={handleChoice}>{sentece.name}</button>
        })
        }
            <div className="card mt-3">
                <div className="card-header"></div>
                <div className="card-body"></div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
}

export default FlashCard;