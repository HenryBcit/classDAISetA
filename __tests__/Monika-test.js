/**
 * @format
 */

import 'react-native';
import React from 'react';
import Monika from '../Monika/Monika';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Monika correctly', () => {
  renderer.create(<Monika />);
});
