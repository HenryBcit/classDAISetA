/**
 * @format
 */

 //This is how we unit test without simulator and test before importing comp to app
 import 'react-native';
 import React from 'react';
 import Naomi from '../comps/Naomi';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('renders Naomi correctly', () => {
   renderer.create(<Naomi />);
 });
 