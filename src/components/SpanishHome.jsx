import { useState } from "react"
import spanish from "../spanish"
import SpanishQuestion from "./SpanishQuestion"

export default function AdminHome() {

    const [questionIndex, setQuestionIndex] = useState(0)

    function checkAnswer(ans) {
        console.log(ans === spanish[questionIndex].answers[0] ? true : false)
        nextQuestion()
    }
    

    function nextQuestion() {
        setQuestionIndex(prevVal => prevVal + 1)
    }

    return (
        <div className="row">
            <SpanishQuestion checkAnswer={checkAnswer} spanish={spanish} questionIndex={questionIndex} />
        </div>
    )
}