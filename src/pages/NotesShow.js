import { useParams } from "react-router-dom";
import data from '../notesData';
import { useEffect, useState } from "react";

const NotesShow = () => {
    
    const [article, setArticle] = useState({});

    const { id } = useParams()
    console.log(id);

    const getArticle = () => {
        data.forEach(d => {
            if (d.id === id) {
                setArticle(d)
            }
        })
    }

    useEffect(() => {
        getArticle()
    }, [])

    return(
        <div>{article.title}</div>
    )
}

export default NotesShow;