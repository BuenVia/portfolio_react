import { useState } from "react";
import sentencesArray from "../sentenceData";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const FlashCard = () => {
    
    const randomIndex = () => {
        return Math.floor((Math.random() * sentencesArray[index].sentences.length))
    }
    const [isActive, setIsActive] = useState(false)
    const [index, setIndex] = useState(0);
    const [sentenceIndex, setSentenceIndex] = useState(randomIndex())
    const [answer, setAnswer] = useState("")
    const [questionIndex, setQuestionIndex] = useState(0)


    const handleChoice = (e) => {
        const { value } = e.target
        setIndex(value - 1)
        setIsActive(true)
    }

    const handleClick = (e) => {
        // if (index < sentencesArray.length - 1 && answer === sentencesArray[index].answer) {
        // if (index < sentencesArray[index].sentences.length - 1) {
        if (questionIndex < 10) {
            // setSentenceIndex(val => val + 1)
            setSentenceIndex(randomIndex())
            setQuestionIndex(val => val + 1)
        // } else if (index === sentencesArray[index].sentences.length - 1) {
        } else if (questionIndex === 10) {
            console.log(('Complete'));
            setIsActive(false)
        } else {
            console.log(`Try again... ${sentencesArray[index].sentences[sentenceIndex].question}`)
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
        speech.text = sentencesArray[index].sentences[sentenceIndex].question
        speech.rate = 1
        speechSynthesis.speak(speech)
    }

    const cancel = () => {
        setAnswer("")
        setIndex(0)
        setSentenceIndex(0)
        setIsActive(false)
    }

    return (
        <div className="container">
            {isActive ? 
                <div>
                    <div className="card mt-3">
                        <div className="card-header">
                            Traduce {console.log(randomIndex())}
                        </div>
                        <div className="card-body flash__card">
                            <div>
                                <span className="flash__sentence">{sentencesArray[index].sentences[sentenceIndex].answer} <button className="flash__btn" onClick={playSound}>&#9658;</button> </span>
                            </div>
                            <div>
                                <input type="text" className="flash__input" name="answer" onChange={handleInput} value={answer} />
                            </div>
                            <button className="btn btn-sm" onClick={handleClick}>Submit</button>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-sm" onClick={cancel}>Cancel</button>
                        </div>

                    </div>
                        <div className="card mt-3">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <Markdown remarkPlugins={[remarkGfm]}>{sentencesArray[index].notes}</Markdown>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                </div>
                :
                sentencesArray.map(sentece => {
                    return <button className="btn btn-sm" key={sentece.id} value={sentece.id} onClick={handleChoice}>{sentece.name}</button>
                })
            }
        </div>
    )
}

export default FlashCard;