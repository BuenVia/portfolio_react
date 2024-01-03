import { useState } from "react";


const Notes = () => {

    const [newNote, setNewNote] = useState({
        title: "",
        author: "",
        content: "",
        tags: [],
        createdAt: "2024-01-01"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewNote(prevVals => {
            return {
                ...prevVals,
                [name]: value
            }    
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(newNote);
    }

    return (
        <div>
            <div className="container mb-4">
                <div className="row mt-4">
                    <div className="card">
                        <div className="card-header">New Note</div>
                        <div className="card-body">
                            <form onSubmit={handleClick}>
                                <div className="">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title" onChange={handleChange}></input>
                                </div>
                                <div className="">
                                    <label className="form-label">Author</label>
                                    <input type="text" className="form-control" name="author" onChange={handleChange}></input>
                                </div>
                                <div className="">
                                    <label className="form-label">Content</label>
                                    <textarea className="form-control" name="content" onChange={handleChange}></textarea>
                                </div>
                                <div className="">
                                    <label className="form-label">Tags</label>
                                    <input type="text" className="form-control" name="tags" onChange={handleChange}></input>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;