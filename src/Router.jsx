import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShowAppointments from './pages/ShowAppointments';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<ShowAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
