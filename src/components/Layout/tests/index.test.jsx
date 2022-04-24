/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import Page from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
});

it('renders page correctly', () => {
  const { getByTestId } = render(<Page title="Test" />);
  expect(getByTestId('page-test')).toHaveTextContent('Test');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Page title="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
