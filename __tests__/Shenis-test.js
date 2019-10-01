/**
 * @format
 */

import 'react-native';
import React from 'react';
import Shenis from '../Shenis/Shenis';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Shenis correctly', () => {
  renderer.create(<Shenis />);
});
