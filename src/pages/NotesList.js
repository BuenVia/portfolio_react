import axios from 'axios'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

const NotesList = () => {

    const [loading, setLoading] = useState(false)
    const [notesList, setNotesList] = useState([])

    const getNotes = async () => {
        const url = 'https://mjclifford.onrender.com/api/note'
        try {
            await axios
            .get(url)
            .then(res => {
                setNotesList(res.data)
            })
            setLoading(true)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className='container mt-5'>
            <div className='row'>

            {loading ? notesList.reverse().map(note => {
                return (
                    <div key={note.id} className='col-md-12 m-3'>
                        <div className='card'>                      
                            <div className='card-header'>{note.title}</div>
                            <div className='card-body'>{note.markdown}</div>
                            <div className='card-footer'><a href={`/notes/${note._id}`}><button className='btn btn-sm'>Read More...</button></a></div>
                    
                        </div>
                    </div>)
            }) : <LoadingSpinner />}
            </div>
        </div>
    )
}

export default NotesList;