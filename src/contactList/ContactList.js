import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';

import PropTypes from 'prop-types';
import ContactListItem from '../components/contactListItem/ContactListItem';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contacts/contacts-actions";
import { fetchContacts } from '../redux/contacts/contacts-actions';
//import { saveToLocalStorage } from '../components/localStorage/LocalStorage'

const getFilteredContacts = (contacts, filter) => {
    
      return contacts.filter(contacts =>
        contacts.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contacts.number.includes(filter)
      );
    };


const ContactList = () => {
    const contacts = useSelector(({ contacts, filter}) =>
    getFilteredContacts(contacts, filter)
    );

    const dispatch = useDispatch();
    // saveToLocalStorage("CONTACTS", contacts);
    const status = useSelector(state => state.contacts.status);

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchContacts())
      }
    }, [status, dispatch])

    return (
            <ContactListCnt>
              {contacts.map(({ id, name, number }) => (
                <ContactListItem
                contactName={name}
                contactNumber={number}
                key={id}
                deleteContact={() => dispatch(deleteContact(id))}
              />
              ))}
                
            </ContactListCnt>
          );
}

ContactList.propTypes = {
      deleteContact: PropTypes.func,
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired
        })
      )
    };

export default ContactList;