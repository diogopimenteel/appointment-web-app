import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

function index() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" data-test-id="navbar-test">
      <Navbar.Brand href="/">
        <Image
          className="d-inline-block align-center"
          src="/Images/oms-logo.jpg"
          thumbnail="true"
          rounded="true"
          width="65"
          height="65"
        />
        {' '}
        Appointments for COVID-19 vaccination

      </Navbar.Brand>
    </Navbar>
  );
}

export default index;
