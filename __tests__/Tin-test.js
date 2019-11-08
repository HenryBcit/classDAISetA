/**
 * @format
 */

import 'react-native';
import React from 'react';
import Tin from '../Tin/Tin';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Main correctly', () => {
    renderer.create(<Tin />);
});
