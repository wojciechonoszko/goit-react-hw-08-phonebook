import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contactReducer } from './redux/contacts/contacts-reducer'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';




const store = createStore(contactReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>
  
);