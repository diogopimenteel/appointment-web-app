import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { toast } from 'react-toastify';
import {
  setHours, setMinutes,
} from 'date-fns';

import api from '../../services/api';
import inputValidation from '../../services/validations/input-validation';
import DateInput from '../DateInput';

const initialValues = {
  name: '',
  birthday: null,
  selectedDate: null,
};

const updateTime = (date) => {
  const currentDate = new Date();
  const selectedDate = new Date(date);

  return currentDate.getTime() < selectedDate.getTime();
};

const currentTime = new Date();

function AppointmentForm() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const onPost = async (body) => {
    await api
      .post('/appointment', body)
      .then(() => {
        toast.info('Appointment created successfully!');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={inputValidation}
      onSubmit={onPost}
      enableReinitialize

    >
      {(formik) => (
        <Form className="form">
          <div className="form-group form-focus">
            <br />
            <Field
              className={`form-control floating ${formik.errors.name && 'error'}`}
              type="text"
              id="name"
              name="name"
              placeholder="Patient Name"
              data-test-id="name-form-test"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                formik.handleChange(event);
              }}
            />
            <ErrorMessage
              component="span"
              className="error"
              name="name"
              data-test-id="error-name-test"
            />
          </div>

          <br />
          <DateInput
            name="birthday"
            type="date"
            label="Patient Birthday"
            maxDate={new Date()}
            data-test-id="birthday-form-test"
            onChange={(date) => {
              setBirthday(date);
              formik.setFieldValue('birthday', date);
            }}
            selected={birthday}
            dateFormat="dd/MM/yyyy"
          />

          <br />
          <DateInput
            name="selectedDate"
            label="Date for Vaccination"
            showTimeSelect
            minDate={new Date()}
            minTime={setHours(setMinutes(currentTime, 0), 6)}
            maxTime={setHours(setMinutes(currentTime, 30), 18)}
            filterTime={updateTime}
            data-test-id="date-form-test"
            onChange={(date) => {
              setSelectedDate(date);
              formik.setFieldValue('selectedDate', date);
            }}
            selected={selectedDate}
            dateFormat="dd/MM/yyyy HH:mm"
          />

          <br />
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-primary btn-md"
              type="submit"
              disabled={!formik.dirty && formik.isValid}
              data-test-id="button-form-test"
            >
              Create Appointment
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AppointmentForm;
