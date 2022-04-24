/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';

import ListView from '../index';
import '@testing-library/jest-dom';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentList />, div);
});

test('renders table properly', () => {
  const { getByTestId } = render(<ListView />);
  expect(getByTestId('show-appointments-test')).toHaveDisplayValue;
});

test('matches snapshot', () => {
  const tree = renderer.create(<AppointmentList />).toJSON();
  expect(tree).toMatchSnapshot();
});
