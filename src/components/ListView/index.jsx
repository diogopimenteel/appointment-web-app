/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

import api from '../../services/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api
      .get('/appointment')
      .then((response) => setAppointments(response.data))
      .catch(() => toast.error('Something went wrong'));
  }, []);

  return (
    <div>
      <Table data-test-id="show-appointments-test">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Selected</th>
            <th>Appointment Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.birthday}</td>
              <td>{appointment.selectedDate}</td>
              <td>{appointment.attended}</td>
            </tr>
          )) : ''}
        </tbody>
      </Table>
    </div>
  );
}

export default AppointmentList;
