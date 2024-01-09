import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const NotesShow = () => {
    
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState({});
    const { id } = useParams()

    useEffect((url = `https://mjclifford.onrender.com/api/note/${id}`) => {
            try {
                axios
                .get(url)
                .then(res => {
                    setNote(res.data)
                })
                setLoading(true)
            } catch (error) {
                
            }
    }, [id])

    return(
        <div className="container">
            {loading ? <div className="card mt-3">
                <div className="card-header">
                    {note.title}
                </div>
                <div className="card-body">
                    <h6>By: {note.author}</h6>
                    <Markdown remarkPlugins={[remarkGfm]}>{note.markdown}</Markdown>
                </div>
                <div className="card-footer">
                    <a href="/notes"><button className="btn btn-sm">Back</button></a>
                </div>
            </div> : <LoadingSpinner />}
        </div>
    )
}

export default NotesShow;