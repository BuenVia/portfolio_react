import React from "react";
import Intro from '../components/Intro'
import BlogPosts from '../components/BlogPosts'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
          <div  className="main">
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
        <Footer />
      </div>
      )
}