import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');