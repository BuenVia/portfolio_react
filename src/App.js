import React from "react"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Languages from "./components/Languages"
import Projects from "./components/Projects"
import BlogPosts from "./components/BlogPosts"

export default function App() {




  return <div>
    <Header />
    <div className="container">
     <div className="row mt-4">
      <Intro />
      <Languages />
     </div>
     <div className="row mt-4">
      <Projects />
      <BlogPosts />
     </div>
    </div>
  </div>
}