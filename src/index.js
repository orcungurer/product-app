import React from 'react';
import ReactDOM from "react-dom/client";
// COMPONENTS
import App from './components/App';
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// CUSTOM STYLES
import './scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
