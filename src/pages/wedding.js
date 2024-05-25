import { useState } from "react"
// import { useRef } from "react"
import emailjs from '@emailjs/browser'

const Wedding = () => {

    const [email, setEmail] = useState({
        attend: "",
        firstname: "",
        lastname: "",
        guests: "",
        dietry: "",
        address: ""
    })
    // const form = useRef()

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
        // console.log(form.current);
        emailjs
        .send(
            'service_if35bh3', 
            'template_si55oe6', 
            {
                attend: email.attend,
                firstname: email.firstname,
                lastname: email.lastname,
                guests: email.guests,
                dietry: email.dietry,
                address: email.address
            },
            { publicKey: 'hvIxhJA1XhTZHHkL5' }
        )
        .then(
            alert("Thanks for sending... you can now navigate away.")
        )
    }

    return (
        <div className="container mb-4">
            <p style={{ marginTop: "1em", fontWeight: "bold" }}>WEDDING</p>

            <p>Saturday 28th September 2024</p>
            <p>Valencia, Spain</p>

            {/* <form ref={form} onSubmit={handleSend} className="wedding__form"> */}
            <form action="" className="wedding__form" onSubmit={handleSend}>
                <div className="wedding__div">
                    <label htmlFor="" onChange={updateForm}>Attending?</label>
                    <select onChange={updateForm} name="attend" id="attend" required>
                        <option value="">---PLEASE SELECT---</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">First Name</label>
                    <input onChange={updateForm} type="text" name="firstname" id="" required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Last Name</label>
                    <input onChange={updateForm} type="text" name="lastname" id="" required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Number of Guests (if just you, select 1 - if not coming write 0)</label>
                    <input onChange={updateForm} type="number" name="guests" id="" required/>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Dietry Requirements</label>
                    <textarea onChange={updateForm} name="dietry" id="" ></textarea>
                </div>
                <div className="wedding__div">
                    <label htmlFor="">Address (to send the invite - if not coming write 'N/A')</label>
                    <textarea onChange={updateForm} name="address" id="" required></textarea>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Wedding

