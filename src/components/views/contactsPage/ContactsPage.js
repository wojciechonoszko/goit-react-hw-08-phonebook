import React from 'react';
import { useFetchContactsQuery } from '../../../redux/contactSlice';
import ContactForm from '../../contactForm/';
import Filter from '../../filter';
import ContactList from '../../contactList';
import Container from '../../container';

export default function ContactsPage() {
  const { data } = useFetchContactsQuery();
  console.log(data);
  const contactsData = data;

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contactsData={contactsData} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contactsData={contactsData} />
      </Container>
    </>
  );
};
