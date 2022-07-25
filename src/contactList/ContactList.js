import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';

import PropTypes from 'prop-types';
import ContactListItem from '../components/contactListItem/ContactListItem';

import React from "react";
import { useSelector } from "react-redux";
//import { deleteContact } from "../redux/contacts/contacts-actions";
//import { fetchContacts } from '../redux/contacts/contacts-actions';

import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from '../redux/api';
//import { saveToLocalStorage } from '../components/localStorage/LocalStorage'

// const getFilteredContacts = (contacts, filter) => {
    
//       return contacts.filter(contacts =>
//         contacts.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
//         contacts.number.includes(filter)
//       );
//     };


const ContactList = () => {

  const { data = [] } = useGetContactsQuery();
  const [removeContact] = useRemoveContactMutation();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const contacts = data.filter(({ name }) =>
  name.toLowerCase().includes(normalizedFilter))

    // const contacts = useSelector(({ contacts, filter}) =>
    // getFilteredContacts(contacts, filter)
    // );

    //const dispatch = useDispatch();
    // saveToLocalStorage("CONTACTS", contacts);

    const handleDeleteContact = async id => {
      await removeContact(id).unwrap();
    };
    

    return (
            <ContactListCnt>
              {contacts.map(contact => {
                return (
                  <ContactListItem
                  key={contact.id}
                  contactName={contact.name}
                  contactNumber ={contact.number}
                  deleteContact={() => handleDeleteContact(contact.id)}
                  />
                )
              })}
              
              {/* // {contacts.map(({ id, name, number }) => ( */}
              {/* //   <ContactListItem
              //   contactName={name}
              //   contactNumber={number}
              //   key={id}
              //   deleteContact={() => handleDeleteContact(id)}
              // />
              // ))} */}
                
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