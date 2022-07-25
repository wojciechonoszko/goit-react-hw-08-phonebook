import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('phonebook/filterContacts');
export const addContact = createAction('contacts/del');
export const contactFilter = createAction('contacts/contactFilter');
