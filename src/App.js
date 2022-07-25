import React from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
//import './App.module.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth/auth-operations';
import AppBar from 'components/appBar/AppBar';

const HomePage = lazy(() => import('./components/views/homePage/HomePage'));
const LoginPage = lazy(() => import('./components/views/loginPage/Login'));
const RegisterPage = lazy(() => import('./components/views/registerPage/RegisterPage'));
const ContactsPage = lazy(() => import('./components/views/contactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('components/notFoundPage/NotFoundPage'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    <AppBar />

    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path='/' exact element={<PublicRoute > <HomePage /> </PublicRoute>} />
    <Route path='/register' element={<PublicRoute restricted> <RegisterPage /> </PublicRoute>} />
    <Route path='/login' element={<PublicRoute restricted> <LoginPage /> </PublicRoute>} />
    <Route path='/contacts'  element={<PrivateRoute navigateTo = '/'> <ContactsPage /> </PrivateRoute>} />
    <Route path='*' element={<PublicRoute restricted> <NotFoundPage /> </PublicRoute>} />
    </Routes>
    </Suspense>
    </>
  );
}
