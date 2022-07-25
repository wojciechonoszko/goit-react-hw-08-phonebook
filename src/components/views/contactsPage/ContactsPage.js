import React from 'react';
import { useGetContactsQuery } from '../../../redux/connectionsApi';
import ContactForm from '../../contactForm/ContactForm';
import Filter from '../../filter/Filter';
import ContactList from '../../../contactList/ContactList';
import Container from '../../container/Container';

export default function ContactsPage() {
  const { data } = useGetContactsQuery();
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
