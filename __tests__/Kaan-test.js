/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import NameGreeting from '../Kaan/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it.skip('renders NameGreeting correctly', () => {
  renderer.create(<NameGreeting />);
});
