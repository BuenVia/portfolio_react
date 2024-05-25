import { useState } from "react"

const Wedding = () => {

    const [email, setEmail] = useState({
        attend: "",
        firstname: "",
        lastname: "",
        guests: "",
        dietry: "",
        address: ""
    })

    const updateForm = (e) => {
        const { name, value } = e.target
        setEmail(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSend = (e) => {
        e.preventDefault()
        if (email.attend === "" | email.firstname === "" | email.lastname === "" | email.guests === "" | email.dietry === "" | email.address === "") {

        }    }

    return (
        <div className="container mb-4">
            <p style={{ marginTop: "1em", fontWeight: "bold" }}>WEDDING</p>

            <p>Saturday 28th September 2024</p>
            <p>Valencia, Spain</p>

            <form onSubmit={handleSend} className="wedding__form">
                <div className="wedding__div">
                    <label htmlFor="">Attending?</label>
                    <select onChange={updateForm} name="" id="attend" required>
                        <option value="">---PLEASE SELECT---</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">First Name</label>
                    <input onChange={updateForm} type="text" name="firstname" id="" value={email.firstname} required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Last Name</label>
                    <input onChange={updateForm} type="text" name="lastname" id="" value={email.lastname} required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Number of Guests</label>
                    <input onChange={updateForm} type="number" name="guests" id="" value={email.guests} required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Dietry Requirements</label>
                    <textarea onChange={updateForm} name="dietry" id="" value={email.dietry}></textarea>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Address</label>
                    <textarea onChange={updateForm} name="address" id="" value={email.address} required></textarea>
                </div>
                <button type="submit" className="btn btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default Wedding

