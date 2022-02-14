import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const BrandsTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default BrandsTemplate;
