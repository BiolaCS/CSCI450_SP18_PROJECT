import React from 'react';
import App from './App';
import StartupScreen from './Screens/Pre-Login/StartupScreen';
import QuestionnaireScreen from './Screens/Pre-Login/QuestionnaireScreen';
import EncouragementScreen from './Screens/Post-Login/EncouragementScreen';
import HomeScreen from './Screens/Post-Login/HomeScreen';
import ServeScreen from './Screens/Post-Login/ServeScreen';
import SmallGroupScreen from './Screens/Post-Login/SmallGroupScreen';

import renderer from 'react-test-renderer';

test('Questionnaire renders correctly', () => {
  const tree = renderer.create(<QuestionnaireScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('StartupScreen renders correctly', () => {
  const tree = renderer.create(<StartupScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('EncouragementScreen renders correctly', () => {
  const tree = renderer.create(<EncouragementScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ServeScreen renders correctly', () => {
  const tree = renderer.create(<ServeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SmallGroupScreen renders correctly', () => {
  const tree = renderer.create(<SmallGroupScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
