import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

function Hi(){
  return (
    <View>
      <Text>Cynthia</Text>
      <View>
      <Button
        onPress={() => {
        alert('Hello!');
        }}
        title="Press Me"
        />
        </View>
    </View>
  );
};

export default Hi;