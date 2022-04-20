import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

import axios from '../../services/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState();

  const getAppointments = async () => {
    await axios
      .get('/appointment')
      .then((response) => {
        setAppointments(
          response.data.appointments.map((appointment) => ({
            ...appointment,
            birthday: new Date(appointment.birthday),
            selectedDate: new Date(appointment.selectedDate),
          })),
        );
      })
      .catch(() => toast.error('Something went wrong...'));
  };

  const isAttended = async ({ target: { checked } }, appointment) => {
    const newAppointments = appointments.map((newAppointment) => {
      if (newAppointment._id === appointment._id) {
        return {
          ...newAppointment,
          attended: checked,
        };
      }
      return newAppointment;
    });

    await axios
      .put(`/appointment/${appointment._id}`, {
        name: appointment.name,
        attended: checked,
      })
      .then(
        checked
          ? toast.success('Appointment completed')
          : toast.error('Appointment not completed'),
      );

    setAppointments(newAppointments);
  };

  useEffect(() => {
    if (!appointments) {
      getAppointments();
    }
  }, []);

  return (
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
        {appointments
            && appointments
              .sort((a, b) => new Date(a.selectedDate) - new Date(b.selectedDate))
              .map((appointment) => (
                <tr key={appointment.index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.birthday}</td>
                  <td>{appointment.selectedDate}</td>
                  <td>
                    <input
                      onChange={(event) => isAttended(event, appointment)}
                      checked={appointment.attended}
                      type="checkbox"
                    />

                    <span className="m-4">
                      {appointment.attended
                        ? 'Done'
                        : 'Waiting'}
                    </span>
                  </td>
                </tr>
              ))}
      </tbody>
    </Table>
  );
}

export default AppointmentList;
