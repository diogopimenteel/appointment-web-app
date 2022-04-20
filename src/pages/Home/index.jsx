import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

function Home() {
  return (
    <div align="center">
      <Layout title="Select one of the options">
        <div align="center">
          <Link to="/create-appointment">
            <Button className="m-2">Create appointment</Button>
          </Link>

          <Link to="/show-appointments">
            <Button>Show appointments</Button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
