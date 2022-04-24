/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import Card from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('renders card correctly', () => {
  const { getByTestId } = render(<Card title="Test 101" />);
  expect(getByTestId('card-test')).toHaveTextContent('My Test 101');
});

it('renders card correctly', () => {
  const { getByTestId } = render(<Card title="Test 102" />);
  expect(getByTestId('card-test')).toHaveTextContent('My Test 102');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Card title="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
