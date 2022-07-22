import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { addNewContact, deleteContact} from "./contacts-actions";

const contactsReducer = createReducer(initialState, {
  [addNewContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});


export {contactsReducer};