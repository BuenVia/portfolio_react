import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle"
import NoPage from "./pages/NoPage";
import Projects from "./components/Projects";
import Summary from "./pages/Summary";

export default function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="summary" element={<Summary />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogArticle />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}