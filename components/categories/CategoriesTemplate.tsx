import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const CategoriesTemplate: FC = ({ children }) => {
  const router = useRouter();
  console.log('categories router', router);
  return (
    <Container>
      <Nav name={router.query.categoryName} />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default CategoriesTemplate;
