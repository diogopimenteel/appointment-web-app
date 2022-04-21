import React from 'react';
import { Card } from 'react-bootstrap';

function index({ title, children }) {
  return (
    <div>
      <Card data-test-id="card-test">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  );
}

export default index;
