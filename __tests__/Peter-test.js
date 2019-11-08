/**
 * @format
 */

import 'react-native';
import React from 'react';
import Peter from '../Peter/Peter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Page1 correctly', () => {
  renderer.create(<Peter />);
});
