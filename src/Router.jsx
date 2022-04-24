import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShowAppointments from './pages/ShowAppointments';
import CreateAppointment from './pages/CreateAppointment';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<ShowAppointments />} />
        <Route path="/appointment/new" element={<CreateAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
