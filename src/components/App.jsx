import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
// import { ContactForm } from './ContactForm';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
import { LayoutPage } from '../pages/LayoutPage/LayoutPage';
import { getUserCurrentThunk } from '../redux/operations/operationsAuth';

// import s from './App.module.css';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const LayoutPage = lazy(() => import('../pages/LayoutPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCurrentThunk());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* <Route path="/contacts" element={ <ContactsPage/>} /> */}
          {/* <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage/>} /> */}
          {/* <Route path="/login" element={<LoginPage/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <div className={s.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
};
