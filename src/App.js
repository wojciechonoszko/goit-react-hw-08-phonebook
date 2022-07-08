import React, { Component } from 'react';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './contactList/ContactList';
// import {v4 as uuid} from 'uuid';
// import { PhonebookContainer, ContactsContainer } from './components/contactForm/ContactFormStyles';

class App extends Component {

// state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//     ],
//     filter: ''
// };

// componentDidMount() {
//     console.log('[componentDidMount]');
//     const contacts = localStorage.getItem('contacts');
//     if (contacts) {
//         const parsedContacts = JSON.parse(contacts);
//         console.log(parsedContacts);
//         this.setState({contacts: parsedContacts});
//     }
// }

// componentDidUpdate(prevProps, prevState) {
//     console.log('[componentDidUpdate]');
//     if (prevState.contacts !== this.state.contacts) {
//         console.log(prevState.contacts, 'prevState');
//         console.log(this.state.contacts, 'state');
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
// }

// addNewContact = ({name,number}) => {
//     if (this.state.contacts.some(contact => contact.name === name)) {
//         alert(`${name} is already in contacts.`);
//         return;
//     }

//     this.setState(prevState => {
//         const newContacts = [
//             ...prevState.contacts,
//             {id: uuid(), name: name, number: number}
//         ];
//         return {contacts: newContacts};
//     });
// };

// getFilteredContacts = () =>
//     this.state.contacts.filter(contact =>
//         contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase().trim())
//     );

// handleChange = event => {
//     this.setState({[event.target.name]: event.target.value});
// };

// deleteContact = id => {
//     this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contact => contact.id !== id)
//     }))
// };

render() {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
            
        </div>
    );
}
}

export default App