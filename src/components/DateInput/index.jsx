/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DateInput(props) {
  const {
    label, name, ...otherProps
  } = props;
  return (
    <div className="form-group form-focus">
      <Field name={name}>
        {({ form, field, meta }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <DatePicker
              autoComplete="off"
              className={`form-control floating ${meta.error && 'error'}`}
              id={name}
              {...field}
              {...otherProps}
              dateFormat={
                otherProps.showTimeSelect ? 'dd/MM/yyyy - HH:mm' : 'dd/MM/yyyy'
              }
              withPortal
              placeholderText={label}
              selected={value}
              onChange={(newValue) => setFieldValue(name, newValue)}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          );
        }}
      </Field>
      <ErrorMessage className="error" name={name} component="span" />
    </div>
  );
}

export default DateInput;
