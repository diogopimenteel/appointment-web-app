import React from 'react';
import { ToastContainer } from 'react-toastify';

import Router from './Router';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
