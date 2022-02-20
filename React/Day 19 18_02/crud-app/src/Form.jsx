import React, { useState } from 'react'
import Contacts from './Contacts'

const Form = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [contacts, setContacts] = useState([]);
    
   const handleName=(event) => {
       setName(event.target.value);
    }
    const handleNumber=(event) => {
        setNumber(event.target.value);
    }

    const handleEmail=(event) => {
        setEmail(event.target.value);
    }

    const handleDisplayContacts=() => {
        setContacts([...contacts, {'name':name, 'number':number, 'email':email}]);
        setName("");
        setNumber("");
        setEmail("");
    }

    const deleteContact = (Email) => {
        setContacts(contacts.filter(el => el.email !== Email));
    }

    const handleEdit = (Email) => {
        const newContacts=[...contacts];
        const index = newContacts.findIndex(el=>el.email==Email);
        newContacts[index] = {'name':name, 'number':number,'email':email};
        setContacts(newContacts);
        setName("");
        setEmail("");
    }
  return (
    <>
   <div className="container">
    <form>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleName} value={name}/>
       </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Number" aria-label="Email" onChange={handleNumber} value={number}/>
      </div>
    </div>
    <div className="col">
        <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmail} value={email}/>
      </div>
    <button type="button" className="btn btn-primary mt-3" onClick={handleDisplayContacts}>Add Contact</button>
      </form>
    </div>
    <Contacts contacts={contacts} handleDelete={deleteContact} handleEdit={handleEdit}/>
    </>
  )
}

export default Form



