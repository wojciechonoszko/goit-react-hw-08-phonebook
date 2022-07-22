import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filter-actions';


const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export {filterReducer};