import React from 'react';
import App from './App';
import StartupScreen from './Screens/Pre-Login/StartupScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<StartupScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
