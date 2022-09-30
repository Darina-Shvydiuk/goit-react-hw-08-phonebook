import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getUserCurrentThunk } from '../redux/operations/operationsAuth';
import { LayoutPage } from '../pages/LayoutPage/LayoutPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCurrentThunk());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route index element={<HomePage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Route>
        </Routes>
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </>
  );
};
