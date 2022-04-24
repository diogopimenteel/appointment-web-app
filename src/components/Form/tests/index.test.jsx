/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import ReactDOM from 'react-dom';

import {
  render,
  act,
  fireEvent,
  screen,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AppointmentForm from '../index';
import api from '../../../services/api';

jest.mock('../../../../services/api');

afterEach(cleanup);

describe('Appointment Form', () => {
  describe('with valid inputs', () => {
    test('calls the onSubmit function', async () => {
      const mockOnSubmit = api.post.mockResolvedValue();
      await render(<AppointmentForm />);

      await act(async () => {
        fireEvent.change(screen.getByFieldPlaceHolder('Patient Name'), {
          target: { value: 'Thomas Shelby' },
        });
        fireEvent.change(screen.getByFieldPlaceHolder('Patient Birthday'), {
          target: {
            value: new Date(
              'Date Sun Apr 24 2022 04:52:29 GMT-0300 (Brasilia Standard Time)',
            ),
          },
        });
        fireEvent.change(screen.getByFieldPlaceHolder('Date for Vaccination'), {
          target: {
            value: new Date(
              'Date Sun Apr 24 2022 10:00:00 GMT-0300 (Brasilia Standard Time)',
            ),
          },
        });
      });

      await act(async () => {
        userEvent.click(screen.getByText('Create Appointment'));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentForm />, div);
});

test('matches snapshot', () => {
  const tree = renderer.create(<AppointmentForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('invalid name', async () => {
  const { getByFieldPlaceHolder } = render(<AppointmentForm />);

  await act(async () => {
    const nameInput = getByFieldPlaceHolder('Name');
    fireEvent.change(nameInput, { target: { value: 'Digo71' } });
    fireEvent.blur(nameInput);
  });
  expect(screen.getByTestId('name-form-test')).toHaveValue('Digo71');
  expect(screen.queryByTestId('error-name-test')).toBeInTheDocument();
});
