import React from 'react';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './contactList/ContactList';
import {
  PhonebookContainer,
  ContactsContainer,
} from './components/contactForm/ContactFormStyles';

export default function App() {
  return (
    <div>
      <PhonebookContainer>
        <h1>Phonebook</h1>
        <ContactForm />
      </PhonebookContainer>
      <ContactsContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactsContainer>
    </div>
  );
}
