/**
 * @format
 */

import 'react-native';
import React from 'react';
import Irvin from '../comps/Irvin';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Irvin correctly', () => {
  renderer.create(<Irvin />);
});
