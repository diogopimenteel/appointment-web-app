import React from 'react';

import AppointmentList from '../../components/ListView';
import Layout from '../../components/Layout';

function ShowAppointments() {
  return (
    <div align="center">
      <Layout title="List of Appointments">
        <AppointmentList />
      </Layout>
    </div>
  );
}

export default ShowAppointments;
