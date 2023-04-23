import { useState } from "react"
import spanish from "../spanish"

export default function AdminHome() {

    const [ans, setAns] = useState("")
    const [questionIndex, setQuestionIndex] = useState(0)

    function handleChange(e) {
        const value = e.target.value
        setAns(value)
    }

    function handleClick() {
        // Build out show answer function
        // Include 'next' button to move on to next question, like DuoLingo
        console.log(ans === spanish[questionIndex].answers[0] ? true : false)
        nextQuestion()
    }

    function nextQuestion() {
        setQuestionIndex(prevVal => prevVal + 1)
        setAns("")
    }

    return (
        <div className="row">
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