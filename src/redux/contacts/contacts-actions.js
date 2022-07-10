import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const getContacts = state => state.contacts.contacts;