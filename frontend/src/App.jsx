import React, { useCallback, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer as Toaster } from 'react-toastify';

import { ROUTES } from './utils/router';

import { AppContext } from './context/AppContext';

import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Chat from './pages/Chat/Chat';

const App = () => {
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  );

  const loginUser = useCallback((user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }, []);

  const logoutUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const context = useMemo(
    () => ({ user, login: loginUser, logout: logoutUser }),
    [user, logoutUser, loginUser],
  );

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
