import dataNotes from '../notesData'

const NotesList = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>

            {dataNotes.map(note => {
                return (
                    <div className='col-md-12 m-3'>
                        <div className='card'>
                    
                            <div className='card-header'>{note.title}</div>
                            <div className='card-body'>{note.content.slice(0, 100)}</div>
                            <div className='card-footer'><a href={`/notes/${note.id}`}><button className='btn btn-sm'>Read More...</button></a></div>
                    
                        </div>
                    </div>)
            })}
            </div>
        </div>
    )
}

export default NotesList;