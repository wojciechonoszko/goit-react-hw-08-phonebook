import { phonebookAPI } from './api';
import { configureStore } from '@reduxjs/toolkit';
import { filter } from './reducers';

export const store = configureStore({
    reducer: {
        [phonebookAPI.reducerPath]: phonebookAPI.reducer,
        filter,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookAPI.middleware),
});