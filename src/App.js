import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import NotesCreate from "./pages/NotesCreate";
import NotesList from "./pages/NotesList";
import NotesShow from "./pages/NotesShow";

export default function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/notes/create" element={<NotesCreate />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/:id" element={<NotesShow />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}