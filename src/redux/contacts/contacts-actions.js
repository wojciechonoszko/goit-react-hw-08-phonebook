import { createAction } from '@reduxjs/toolkit';

import { ActionTypes } from './constants'

import {v4 as uuid} from 'uuid';

//export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const getContacts = state => state.contacts.contacts;

export const addNewContact = createAction("contacts/Add", ({name, number }) => ({
    type: ActionTypes.AddContact,
    payload: {
        id: uuid(),
        name,
        number,
    }
}));

export const removeContact = payload => ({
    type: ActionTypes.RemoveContact,
    payload
})

