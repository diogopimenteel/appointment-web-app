/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import Navbar from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});

it('renders navbar correctly', () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId('navbar-test')).toHaveTextContent('Appointments for COVID-19 vaccination');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
