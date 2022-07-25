import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';

import PropTypes from 'prop-types';
import ContactListItem from '../components/contactListItem/ContactListItem';

import React from 'react';
import { useSelector } from 'react-redux';

import { useGetContactsQuery, useRemoveContactMutation } from '../redux/api';

const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  const [removeContact] = useRemoveContactMutation();

  const filter = useSelector(state => state.filter);

  const contacts = data.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter) || phone.includes(filter)
  );

  const handleDeleteContact = async id => {
    await removeContact(id).unwrap();
  };

  return (
    <ContactListCnt>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          contactName={name}
          contactNumber={phone}
          key={id}
          deleteContact={() => handleDeleteContact(id)}
        />
      ))}
    </ContactListCnt>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};

export default ContactList;
