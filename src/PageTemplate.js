import React from 'react';
import { Container } from 'react-bootstrap';

const PageTemplate = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default PageTemplate;
