import * as yup from 'yup';

const inputValidation = yup.object().shape({
  name: yup
    .string()
    .required('Name field is required!')
    .min(3)
    .matches(/^[A-Za-zà-úÀ-Ú ]+$/, 'The name should have only letters'),
  birthday: yup.date()
    .nullable()
    .max(new Date(), 'The patient must have at least been born before the current time')
    .required('Birthday field is required!'),
  selectedDate: yup.date()
    .nullable()
    .required('Selected date is required!'),
});

export default inputValidation;
