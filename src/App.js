import React, { Component } from 'react';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './contactList/ContactList';


class App extends Component {



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