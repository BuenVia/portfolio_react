import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import LoadingSpinner from "../components/LoadingSpinner";
import OpenAI from "openai";

export default function SummaryComponent(props) {

    console.log(props.makeCall)

    const [loading, setLoading] = useState(false)
    const [summary, setSummary]= useState([])

    const openai_client = new OpenAI({
        apiKey: process.env['REACT_APP_OPENAI_API_KEY'],
        dangerouslyAllowBrowser: true
    })
    
    const getChatCompletions = async() => {

        const cvText = `Matthew Clifford
            Software Developer
            Email: matthewclifford@hotmail.co.uk
            Address: Hertfordshire, UK
            Portfolio: https://mjclifford.com/ GitHub: https://github.com/BuenVia
            TECHNOLOGY SUMMARY
            Python, JavaScript, PHP, React JS, Node JS, HTML5, CSS, BootStrap, SCSS, MongoDB, POSTGRESQL,
            GitHub, AWS.
            WORK EXPERIENCE
            JUNIOR SOFTWARE DEVELOPER
            HFX
            UK: October 2023 to Present
            - Python Interfaces (using Flask framework)
            - PHP development (using Laminas framework)
            SOFTWARE DEVELOPER (Learning Engineer: Part time) + SENIOR H&S SPECIALIST
            Expedia
            UK: May 2021 to October 2023
            - JS backend application for Slack
            - Deployment via AWS
            - Python applications for processing API data
            - NodeJS RestFUL API
            - The Software Developer element was a part time role alongside the Senior H&S Specialist role.
            H&S TECHNICAL ADVISOR, TRAINER AND AUDITOR
            Checkpoint Solutions
            UK: August 2007 to September 2009 – July 2014 to July 2016 – May 2019 to May 2020
            H&S TECHNICAL ADVISOR, TRAINER AND AUDITOR
            SGS Madrid
            Spain: July 2016 – March 2019
            CUSTOMER SERVICE MANAGER
            Enterprise-Rent-A-Car & OPRO Ltd
            UK: April 2010 – July 2014
            LANGUAGES
            ENGLISH (NATIVE) SPANISH (C1)
            EDUCATION
            Music Production - BA(Hons)
            University of Greenwich
            ➔ Music Production - BA(Hons)
            ➔ Music Production (HND)`
                
        const messages = [
            {"role": "system", "content": "You are a helpful assistant who can summarise CVs and work experience of an individual. \
             Please return, in markdown form, a review of the abilities and experience of the person using the CV provided to you."},
            {"role": "user", "content": cvText}
        ]
    
        const response = openai_client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages
        })
        return (await response).choices[0].message.content
    }
    

    useEffect(() => {
        const call = async () => {
            const result = await getChatCompletions()
            setSummary(result)
            setLoading(true)
        }
        call()
    }, [])

    return <div className="summary-box">
        {loading ? <ReactMarkdown>{summary}</ReactMarkdown> : <LoadingSpinner />}
    </div>
}

