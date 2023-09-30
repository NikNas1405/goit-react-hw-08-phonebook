import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader, AppBarComponent, Container } from '../index';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarComponent />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
