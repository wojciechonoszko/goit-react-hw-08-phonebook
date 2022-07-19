import { combineReducers } from 'redux';
import contactReducer from './contacts/contacts-reducer';
import filter from './filter/filter-reducer';

const rootReducer = combineReducers({
    contactReducer,
    filter
});

export default rootReducer;

// const appReducer = (state, action) => {
//     return state;
//   }

// export default appReducer;