import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './store/store.js';
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)