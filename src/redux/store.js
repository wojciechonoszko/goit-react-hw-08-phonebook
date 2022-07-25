//import { phonebookAPI } from './api';
import { connectionsApi } from './connectionsApi';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import {authReducer} from './auth';
import reducer from './reducers';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: reducer,
    [connectionsApi.reducerPath]: connectionsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(connectionsApi.middleware),
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export const Store = { store, persistor };
