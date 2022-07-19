import { createAction } from '@reduxjs/toolkit';

import { ActionTypes } from './constants'

export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const getContacts = state => state.contacts.contacts;

export const addContact = payload => ({
    type: ActionTypes.AddContact,
    payload
});

export const removeContact = payload => ({
    type: ActionTypes.RemoveContact,
    payload
})

