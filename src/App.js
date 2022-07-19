import React from 'react';

//import { useState, useEffect } from "react";
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './contactList/ContactList';
//import {v4 as uuid} from 'uuid';
import { PhonebookContainer, ContactsContainer } from './components/contactForm/ContactFormStyles';


export default function App() {
    // const [contacts, setContacts] = useState([
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    // ]);

    // const [filter, setFilter] = useState("");

    // useEffect(() => {
        
    //     console.log("useEffect");
    //     const contact = localStorage.getItem("contact");
    //     const contactsParsed = JSON.parse(contact);
    //     if (contactsParsed) {
    //         setContacts(contactsParsed);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("contact", JSON.stringify(contacts));
    // });

    // const formSubmitHandler = (data) => {
    //     const { name, number } = data;
    //     const newContact = {
    //         name,
    //         number,
    //         id: uuid(),
    //     };
    //     if (
    //         contacts.find(
    //             (contact) =>
    //             contact.name.toLowerCase() === newContact.name.toLowerCase()
    //         )
    //     ) {
    //         return alert(`${newContact.name} is already in contacts.`)
    //     }
    //     setContacts([newContact, ...contacts]);
    // };

    // const filterInput = (e) => {
    //     setFilter(e.currentTarget.value);
    // };

    // const filterContacts = contacts.filter((contact) =>
    // contact.name.toLowerCase().includes(filter.toLowerCase())
    // );


    // const deleteButton = (conId) => {
    //     setContacts((prevState) =>
    //       prevState.filter((contact) => contact.id !== conId)
    //     );
    //   };

        return (
            <div>
                <PhonebookContainer>
                    <h1>Phonebook</h1>
                    <ContactForm/>
                </PhonebookContainer>
                <ContactsContainer>
                    <h2>Contacts</h2>
                    <Filter/>
                    <ContactList
                    
                    />
                </ContactsContainer>
                
            </div>
        );

    
      
    
    
}