import React from "react"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import BlogPosts from "./components/BlogPosts"

export default function App() {




  return <div>
    <Header />
    <div className="container mb-4">
     <div className="row">
      <Intro />
      <BlogPosts />
     </div>
     <div className="row">
      <Projects />
     </div>
    </div>
  </div>
}