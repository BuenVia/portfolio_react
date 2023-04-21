import React, { useState } from "react";
import Intro from '../components/Intro'
import BlogPosts from '../components/BlogPosts'
import Projects from '../components/Projects'


export default function Home() {

  const [lang, setLang] = useState(false)

  function handleClick() {
      setLang(prevVals => !prevVals)
  }

    return (
        <div>

            <div className="container mb-4">
              <div className="row">
              <span className="" onClick={handleClick}>{lang ? <div className="lang-btn"><img className="lang-img" src='./spain.png' alt="Spain"></img><span>ES</span></div> : <div className="lang-btn"><img className="lang-img" src='./UK.png' alt="UK"></img><span>EN</span></div>}</span>
                <Intro language={lang} />
                <BlogPosts language={lang} />
              </div>
              <div className="row">
                <Projects language={lang} />
              </div>
            </div>

      </div>
      )
}