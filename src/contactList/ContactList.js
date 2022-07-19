// import React from 'react';
// import PropTypes from 'prop-types';
// //import {v4 as uuid} from 'uuid';
// import ContactListItem from '../components/contactListItem/ContactListItem';
// import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';


// export default function ContactList({ contactReducer, deleteButton }) {

  
//   return (
//     <ContactListCnt>
//       {contactReducer.map(({ id, name, number }) => (
//         <ContactListItem
//         contactName={name}
//         contactNumber={number}
//         key={id}
//         deleteContact={() => deleteButton(id)}
//       />
//       ))}
        
//     </ContactListCnt>
//   );
// };

// ContactList.propTypes = {
//   contactReducer: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteButton: PropTypes.func,
// };

import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../components/contactListItem/ContactListItem';
import {connect} from 'react-redux';
import {removeContact} from '../redux/contacts/contacts-actions';

const ContactList = ({contacts, removeContact}) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => removeContact(contact.id)}
        />
      ))}
    </ul>
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
  console.log('getFilteredContacts');
  console.dir(filter);

  return allContacts.filter(contact =>
    contact.toLowerCase().includes(filter.toLowerCase().trim())
  );
};
const mapStateToProps = state => {
  // console.log('ContactList-mapStateToProps');
  // console.dir(state.contacts);
  return {
    contacts: getFilteredContacts(state.contacts, state.filter)
  };
};

const mapDispatchToProps = {removeContact};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);