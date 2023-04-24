import { useState } from "react"


export default function SpanishQuestion(props) {

    const [ans, setAns] = useState("")

    function handleChange(e) {
        const value = e.target.value
        setAns(value)
    }

    function handleClick() {
        props.checkAnswer(ans)

    }

    return (
        <div>
            <div className="col-md-8 mb-3">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <h5>{props.spanish[props.questionIndex].question}</h5>
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