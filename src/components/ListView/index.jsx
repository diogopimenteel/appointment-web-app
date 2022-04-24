/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import api from '../../services/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState();

  const formatBirthday = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const formatSelectedDate = (date) => format(new Date(date), "dd/MM/yyyy' - 'HH:mm");

  const refreshPage = () => {
    setAppointments();
  };

  const getAppointments = async () => {
    await api
      .get('/appointment')
      .then((response) => setAppointments(response.data))
      .catch(() => toast.error('Something went wrong...'));
  };

  const attendedStatus = async ({ target: { checked } }, appointment) => {
    const newAppointments = appointments?.data.map((newAppointment) => {
      if (newAppointment._id === appointment._id) {
        return {
          ...newAppointment,
          attended: checked,
        };
      }
      return newAppointment;
    });

    await api
      .patch(`/appointment/${appointment._id}`, {
        ...appointment,
        attended: checked,
      })
      .then(() => setAppointments(newAppointments))
      .then(
        checked
          ? toast.success('Appointment done!')
          : toast.error('Appointment not done!'),
      );

    refreshPage();
    getAppointments();
  };

  useEffect(
    () => {
      if (!appointments) {
        getAppointments();
      }
    },
    [],
  );

  return (
    <Table className="table table-hover" responsive="md" data-testid="show-appointments-test">
      <thead>
        <tr align="center">
          <th>Patient Name</th>
          <th>Patient Birthday</th>
          <th>Appointment Date</th>
          <th>Appointment Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments?.data
          .sort((firstDate, secondDate) => new Date(firstDate.selectedDate)
          - new Date(secondDate.selectedDate))
          .map((appointment, index) => (
            <tr key={index} align="center">
              <td>{appointment.name}</td>
              <td>{formatBirthday(new Date(appointment.birthday))}</td>
              <td>{formatSelectedDate(new Date(appointment.selectedDate))}</td>
              <td>
                <input onChange={(event) => attendedStatus(event, appointment)} checked={appointment.attended} type="checkbox" />
                <div className="m-2">
                  {appointment.attended ? 'Done' : 'Waiting'}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default AppointmentList;
