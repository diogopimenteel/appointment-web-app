import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

function Home() {
  return (
    <Layout title="Protect Yourself. Get the COVID-19 vaccine!">
      <Card.Body>
        <Card.Img
          //
          src="/images/file-20210524-19-aq22jo.jpg"
          width="550"
          height="550"
        />
        <Card.Title>
          This web application is a schedule appointments
          for the COVID-19 Vaccine. Health professionals can make schedules, see and monitor
          patients appointments and conclude it when the patient took his vaccine.
        </Card.Title>
        <Link to="/appointment/new">
          <Button className="m-2">Create appointment</Button>
        </Link>

        <Link to="/appointments">
          <Button>Show appointments</Button>
        </Link>
      </Card.Body>
    </Layout>
  );
}

export default Home;
