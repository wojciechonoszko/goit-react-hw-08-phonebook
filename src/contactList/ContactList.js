import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../components/contactListItem/ContactListItem';
import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-actions';


const ContactList = ({contacts, deleteContact}) => {
  return (
    <ContactListCnt>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ContactListCnt>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

const getFilteredContacts = (allContacts, filter) => {

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
};

const mapStateToProps = state => {

  return {
    contacts: getFilteredContacts(state.contacts, state.filter)
  };

};

const mapDispatchToProps = {deleteContact};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

