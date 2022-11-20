import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";




export default function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}