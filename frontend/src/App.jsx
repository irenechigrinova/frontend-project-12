import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/router';

import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
