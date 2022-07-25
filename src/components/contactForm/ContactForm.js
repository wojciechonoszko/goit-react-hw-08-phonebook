import React from 'react';

import { useState } from 'react';

import { useAddContactMutation } from '../../redux/api';
import {
  ButtonContainer,
  ContactFormContainer,
  InputContainer,
  LabelContainer,
} from './ContactFormStyles';

const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addContact({ name, number }).unwrap();

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <LabelContainer htmlFor={name}>Name</LabelContainer>
      <InputContainer
        type="text"
        id="nameId"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name like Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
        required
        placeholder="Type some name."
        onChange={handleChange}
      />
      <LabelContainer htmlFor={number}>Number</LabelContainer>
      <InputContainer
        type="tel"
        id="numberId"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Type phone number."
        onChange={handleChange}
      />
      <ButtonContainer type="submit">Add contact</ButtonContainer>
    </ContactFormContainer>
  );
};

export default ContactForm;
