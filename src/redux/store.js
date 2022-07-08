import contactsReducer from './root/Reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'rdeux-logger';

const middleware =[
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
    logger
];


const store = configureStore({
    reducer: persistReducer(contactsPersistConfig, constactsReducer),
    middleware,
    devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

export default {store, persistor};

