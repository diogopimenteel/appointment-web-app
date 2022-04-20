import React from 'react';
import { Container } from 'react-bootstrap';

import Card from '../Card';

const index = ({ title, children }) => (
  <Container className="mt-4" data-test-id="page-test">
    <Card title={title}>{children}</Card>
  </Container>
);

export default index;
