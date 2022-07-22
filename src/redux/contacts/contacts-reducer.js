import { createReducer } from "@reduxjs/toolkit";
import { initialContacts } from '../../components/localStorage/LocalStorage'
import { addNewContact, deleteContact} from "./contacts-actions";

const contactsReducer = createReducer(initialContacts, {
  [addNewContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});


export {contactsReducer};