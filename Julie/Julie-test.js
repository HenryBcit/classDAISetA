/**
 * @format
 */

import 'react-native';
import React from 'react';
import Julie from '../Julie';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Julie correctly', () => {
  renderer.create(<Julie />);
});
