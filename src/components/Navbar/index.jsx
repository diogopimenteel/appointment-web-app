import React from 'react';
import { Navbar } from 'react-bootstrap';

const index = () => (
  <div>
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" data-test-id="navbar-test">
      <Navbar.Brand href="#home">Appointments for COVID-19 vaccination</Navbar.Brand>
    </Navbar>
  </div>
);

export default index;
