import React, {useState} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
//import styles from './styles/MainStyles';

function Main(){
  const [showName, setShowName] = useState(false);

  var name = null;
  if(showName === true){
    name = (
      <View>
        <Text
        title="Hieeeeeee" />
      </View>
    )
  }

  return (
    <View>
      {name}
      <Button
        title="Jaydan Kai"
        onPress={()=>{
          setShowName(!showName);
        }}
      />
    </View>
  );
};

export default Main;
