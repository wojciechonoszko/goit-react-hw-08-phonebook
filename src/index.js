// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// //import { contactReducer } from './redux/contacts/contacts-reducer'
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import {PersistGate} from 'redux-persist/integration/react';




// //const store = createStore(contactReducer)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
  
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,

//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </React.StrictMode>
  
);

//reportWebVitals();