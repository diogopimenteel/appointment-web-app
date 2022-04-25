/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import {
  Formik, Form, Field, ErrorMessage, useFormik,
} from 'formik';
import { toast } from 'react-toastify';
import {
  setHours, setMinutes,
} from 'date-fns';

import api from '../../services/api';
import inputValidation from '../../services/validations/input-validation';
import DateInput from '../DateInput';
import { getData, storeData } from './useAsyncStorage';

const updateTime = (date) => {
  const currentDate = new Date();
  const selectedDate = new Date(date);

  return currentDate.getTime() < selectedDate.getTime();
};

const currentTime = new Date();

function AppointmentForm() {
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

  const initialValues = useFormik({
    initialValues: {
      name: '',
      birthday: null,
      selectedDate: null,
    },
  });

  useEffect(() => {
    getData('keyName').then((savedValue) => {
      savedValue && initialValues.setFieldValue('name', savedValue);
    });
    getData('keyBirthday').then((savedValue) => {
      savedValue && initialValues.setFieldValue('name', savedValue);
    });
    getData('keySelectedDate').then((savedValue) => {
      savedValue && initialValues.setFieldValue('name', savedValue);
    });
  }, []);

  return (
    <Formik
      initialValues={initialValues.values}
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
              data-testid="name-form-test"
              value={formik.values.name}
              onChange={(event) => {
                formik.setFieldValue('name', event.target.value);
                storeData('keyName', event.target.value);
              }}
            />
            <ErrorMessage
              component="span"
              className="error"
              name="name"
              data-testid="error-name-test"
            />
          </div>

          <br />
          <DateInput
            name="birthday"
            label="Patient Birthday"
            maxDate={new Date()}
            data-testid="birthday-form-test"
            value={formik.values.birthday}
            onChange={(event) => {
              formik.setFieldValue('birthday', event.target.value);
              storeData('keyBirthday', event.target.value);
            }}
          />

          <br />
          <DateInput
            name="selectedDate"
            label="Date for Vaccination"
            showTimeSelect
            minDate={new Date()}
            minTime={setHours(setMinutes(currentTime, 0), 6)}
            maxTime={setHours(setMinutes(currentTime, 0), 18)}
            timeIntervals={60}
            filterTime={updateTime}
            data-testid="date-form-test"
            value={formik.values.startDate}
            onChange={(event) => {
              formik.setFieldValue('selectedDate', event.target.value);
              storeData('keySelectedDate', event.target.value);
            }}
          />

          <br />
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-primary btn-md"
              type="submit"
              disabled={!formik.dirty && formik.isValid}
              data-testid="button-form-test"
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
