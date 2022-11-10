import Header from "./components/Header"
import Cards from "./components/Cards"
import Intro from "./components/Intro"
import React, { useEffect, useState } from "react"


export default function App() {

  const [blogPosts, setBlogPosts] = useState([])

  const url = 'https://mjclifford.herokuapp.com/api/blog'

  // useEffect(() => {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => setBlogPosts(json))
  // }, [])

  const languages = [<div className=" mt-1"><p><i className="fa-brands fa-html5"></i> HTML</p></div>,
  <div className=" mt-1"><p><i className="fa-brands fa-css3-alt"></i> CSS</p></div>,
  <div className=" mt-1"><p><i className="fa-brands fa-square-js"></i> JavaScript</p></div>,
  <div className=" mt-1"><p><i className="fa-brands fa-react"></i> React</p></div>,
  <div className=" mt-1"><p><i className="fa-brands fa-bootstrap"></i> BootStrap</p></div>,
  <div className=" mt-1"><p><i className="fa-brands fa-node-js"></i> Node JS</p></div>,
  <div className=" mt-1"><p><i className="fa-solid fa-database"></i> MongoDB</p></div>
]



  return <div>
    <Header />
    <div className="container">
      <Intro />
    </div>
  </div>
}