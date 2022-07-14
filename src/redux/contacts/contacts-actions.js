import { createAction } from '@reduxjs/toolkit';

import { ActionTypes } from './constants'

export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const getContacts = state => state.contacts.contacts;

export const addContact = (contactName) => ({
    type: ActionTypes.AddContact,
    payload: {
        contactName,
    }, 
})

export const removeContact = (contactId) => ({
    type: ActionTypes.RemoveContact,
    payload: {
        contactId,
    }, 
})

