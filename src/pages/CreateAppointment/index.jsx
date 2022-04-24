import React from 'react';

import Layout from '../../components/Layout';
import AppointmentForm from '../../components/Form';

function CreateAppointment() {
  return (
    <Layout title="Insert the data below to create an appointment">
      <AppointmentForm />
    </Layout>
  );
}

export default CreateAppointment;
