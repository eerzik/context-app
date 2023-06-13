import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Sayfa 2 defa load olmasın diye kaldırdım.
 //<React.StrictMode>
    <App />
 // </React.StrictMode>
);


