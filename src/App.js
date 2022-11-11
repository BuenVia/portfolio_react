import React from "react"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Languages from "./components/Languages"
import Projects from "./components/Projects"
import BlogPosts from "./components/BlogPosts"
import Video from "./components/Video"

export default function App() {




  return <div>
    <Header />
    <div className="container mb-4">
     <div className="row">
      <Intro />
      <Languages />
     </div>
     <div className="row">
      <Projects />
      <BlogPosts />
      <Video />
     </div>
    </div>
  </div>
}