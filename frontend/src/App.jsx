import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer as Toaster } from 'react-toastify';
import { Provider } from 'react-redux';

import { setupStore } from './store';
import { injectStore } from './api';

import { ROUTES } from './utils/router';

import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Chat from './pages/Chat/Chat';
import { Navbar } from './containers';

const store = setupStore();
injectStore(store);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </Provider>
);

export default App;
