import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshData } from 'operations/getAPI';
import { useAuth } from 'operations/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshData(), [dispatch]);
  });

  return !isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
