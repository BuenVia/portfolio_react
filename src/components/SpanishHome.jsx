import { useState } from "react"
import spanish from "../spanish"
// import SpanishQuestion from "./SpanishQuestion"

export default function SpanishHome() {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [ans, setAns] = useState("")
    const [showAns, setShowAns] = useState(false)
    const [correct, setCorrect] = useState(false)
    
    function handleChange(e) {
        const value = e.target.value
        setAns(value)
    }

    function handleClick() {
        setShowAns(true)
        setCorrect(() => {
            return ans === spanish[questionIndex].answers[0] ? true : false
        })
        console.log(ans === spanish[questionIndex].answers[0] ? true : false)
    }    

    function nextQuestion() {
        if (questionIndex < spanish.length - 1) {
            setAns('')
            setShowAns(false)
            setQuestionIndex(prevVal => prevVal + 1)
        } else {

        }
    }

    return (
        <div className="row">
            {/* <SpanishQuestion checkAnswer={checkAnswer} spanish={spanish} questionIndex={questionIndex} /> */}


            <div className="col-md-8 mb-3">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <h5>{spanish[questionIndex].question}</h5>
                        <input type="text" name="userAns" onChange={handleChange} placeholder="Sentence, phrase or word" value={ans} />
                        <button className="btn btn-sm" onClick={handleClick}>Go</button>
                    </div>
                    <div className="card-footer">
                        {showAns && <div><p style={{color: correct ? '#0000CC' : 'red'}}>{correct ? 'Correct' : 'Incorrect: '}{correct ? null : spanish[questionIndex].answers[0]}</p><button className="btn btn-sm" onClick={nextQuestion}>Next</button></div>}
                    </div>
                    
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-footer">

                    </div>
                    
                </div>
            </div>
        </div>

    )
}