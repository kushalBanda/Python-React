import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './ContactList'
import ContactForm from "./ContactForm"

function App() {
  const [contacts, setContacts] = useState([{firstName: "Kushal", lastName: "Banda", email: "kushalbanda265@gmail.com", id: 1}])

  useEffect(() => {
    fetchContacts()
  },[])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
      <ContactList contacts={contacts}/>
      <ContactForm></ContactForm>
    </>
  )
}

export default App
