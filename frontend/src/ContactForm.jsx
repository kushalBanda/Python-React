import { useState } from "react";

const ContactList = ({}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = () => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }

        const url = "http://127.0.0.1:50000/create_contact"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status != 201 && response.status != 200) {
            const message = await response.json()
            alert(data.message)
        } else {
            // successful
        }
    }




    return <form onSubmit={onsubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" 
            value={firstName} onChange={(e => setFirstName(e.target.value))} 
            />
        </div>
        <div>
            <label htmlFor="lastName">First Name:</label>
            <input type="text" id="lastName" 
            value={lastName} onChange={(e => setLastName(e.target.value))} 
            />
        </div>
        <div>
            <label htmlFor="email">First Name:</label>
            <input type="text" id="email" 
            value={email} onChange={(e => setEmail(e.target.value))} 
            />
        </div>
        <button type="submit">Create <Contact></Contact></button>
    </form>

}
export default ContactList;