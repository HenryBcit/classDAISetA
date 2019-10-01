/**
 * @format
 */

import 'react-native';
import React from 'react';
import Page1 from '../comps/Page1';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it.skip('renders Page1 correctly', () => {
  renderer.create(<Page1 />);
});
