import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>,
);
