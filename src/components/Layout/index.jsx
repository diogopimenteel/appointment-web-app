import React from 'react';
import { Container } from 'react-bootstrap';

import Card from '../Card';

function index({ title, children }) {
  return (
    <div>
      <Container className="mt-4" data-test-id="layout-test">
        <Card title={title}>{children}</Card>
      </Container>
    </div>
  );
}

export default index;
