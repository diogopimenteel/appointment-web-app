import React from 'react';
import { Navbar } from 'react-bootstrap';

function index() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" data-test-id="navbar-test">
      <Navbar.Brand>Appointments for COVID-19 vaccination</Navbar.Brand>
    </Navbar>
  );
}

export default index;
