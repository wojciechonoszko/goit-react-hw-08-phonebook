import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact } from './contacts-actions';

const initialState = [
    {id: 'id-1', name: 'Andrzej Duda', number: '459-12-56'},
    {id: 'id-2', name: 'Jaroslaw Kaczynski', number: '443-89-12'},
    {id: 'id-3', name: 'Donald Tusk', number: '645-17-79'},
    {id: 'id-4', name: 'Rafal Trzaskowski', number: '227-91-26'},
    {id: 'id-5', name: 'Roman Giertych', number: '333-555-777'}
];

const contacts = createReducer(initialState, {
    [addNewContact]: (state, {payload}) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload)
});

export default contacts;