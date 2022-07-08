import { combineReducers } from 'redux';
import contacts from './contacts/contacts-reducer';
import filter from './filter/filter-reducer';

const rootReducer = combineReducers({
    contacts,
    filter
});

export default rootReducer;