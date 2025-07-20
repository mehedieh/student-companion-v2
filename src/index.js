import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: for global styles
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// This is the root element in your public/index.html where the app will be mounted.
const root = ReactDOM.createRoot(document.getElementById('root'));

// This is the "other code" that was referred to.
// It renders your main App component into the DOM.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();