import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import PropTypes from 'prop-types';
import{
    ButtonContainer,
    ContactFormContainer,
    InputContainer,
    LabelContainer
} from './ContactFormStyles';

//import { connect } from 'react-redux';
import { addNewContact, getContacts } from '../../redux/contacts/contacts-actions';

export default function ContactForm() {
    const [name, setName] = useState('');
    const handleNameChange = event => {
      setName(event.target.value);
    };
  
    const [number, setNumber] = useState('');
    const handleNumberChange = event => {
      setNumber(event.target.value);
    };
  
    const contacts = useSelector(getContacts);
  
    const dispatch = useDispatch();
  
    const addNew = contact => dispatch(addNewContact(contact));
  
    const handleSubmit = event => {
      event.preventDefault();
  
    //   if (contacts.some(contact => contact.name === name)) {
    //     alert(`${name} is already in contacts.`);
    //     return;
    //   }
  
      addNew({
        name,
        number
      });
  
      setName('');
      setNumber('');
    };

    return (
        <ContactFormContainer onSubmit={handleSubmit}>
            <LabelContainer htmlFor="name">Name</LabelContainer>
            <InputContainer
            type='text'
            id='name'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name like Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            required
            onChange={handleNameChange}
            value={name}
        />
            <LabelContainer htmlFor="number">Number</LabelContainer>
            <InputContainer
            type='tel'
            id='number'
            name='number'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange}
            value={number}
        />
        <ButtonContainer type="submit">Add contact</ButtonContainer>

        </ContactFormContainer>
    );

}

// class ContactForm extends Component {

//     state = {
//         name: '',
//         number: ''
//     };

//     handleChange = event => {
//         this.setState({[event.target.name]: event.target.value});

//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         this.props.addNewContact({
//             name: this.state.name,
//             number: this.state.number
//         });
//     };

//     render() {
//         return (
//             <ContactFormContainer onSubmit={this.handleSubmit}>
//                 <LabelContainer htmlFor="name">Name</LabelContainer>
//                 <InputContainer
//                 type='text'
//                 id='name'
//                 name='name'
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name like Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.name}
//             />
//                 <LabelContainer htmlFor="number">Number</LabelContainer>
//                 <InputContainer
//                 type='tel'
//                 id='number'
//                 name='number'
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.value}
//             />
//             <ButtonContainer type="submit">Add contact</ButtonContainer>

//             </ContactFormContainer>
//         );
//     }
// }

// ContactForm.propTypes = {
//     addNewContact: PropTypes.func.isRequired
// };

// const mapStateToProps = state => {
//     return {
//         contacts: state.contacts
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         addNewContact: contact => dispatch(addNewContact(contact))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);








