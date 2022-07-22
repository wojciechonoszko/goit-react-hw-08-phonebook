import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filter-actions';


// const initialState = '';
// const filter = createReducer(initialState, {
//   [handleChange]: (state, {payload}) => {
//     return payload;
//   }
// });

// export default filter;

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export {filterReducer};