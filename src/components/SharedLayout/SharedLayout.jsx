import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader, AppBarComponent, Container } from '../index';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarComponent />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
