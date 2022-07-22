// import React from 'react';
// import PropTypes from 'prop-types';
// //import {v4 as uuid} from 'uuid';
//import ContactListItem from '../components/contactListItem/ContactListItem';
import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';


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
import {contacts} from '../redux/contacts/contacts-reducer';

const ContactList = ({contacts, removeContact}) => {
  // return (
  //   <ul>
  //     {contacts.map(contact => (
  //       <ContactListItem
  //         name={contact.name}
  //         number={contact.number}
  //         key={uuid()}
  //         deleteContact={() => removeContact(contact.id)}
  //       />
  //     ))}
  //   </ul>
  // );
    return (
    <ContactListCnt>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
        contactName={name}
        contactNumber={number}
        key={uuid()}
        deleteContact={() => removeContact(id)}
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

const getFilteredContacts = (contacts, filter) => {
  console.log('getFilteredContacts');
  console.dir(filter);

  return contacts.filter(contact =>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;