/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@ui/Button';

/**
 * Check if button renders correctly
 * and asserting it to the matching snapshot
 */
it('Button renders correctly', () => {
  const tree = renderer.create(
    <Button />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
