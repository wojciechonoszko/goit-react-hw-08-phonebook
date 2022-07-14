import React from 'react';

import { useState } from "react";
//import PropTypes from 'prop-types';
import{
    ButtonContainer,
    ContactFormContainer,
    InputContainer,
    LabelContainer
} from './ContactFormStyles';


export default function ContactForm({ onSubmit }) {
    const [name, setName ] = useState("");
    const [number, setNumber] = useState("");

    const handleInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;

            default:
                break
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
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
            onChange={handleInput}
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
            onChange={handleInput}
            value={number}
        />
        <ButtonContainer type="submit">Add contact</ButtonContainer>

        </ContactFormContainer>
    );
}