import React, {useState} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

function Mitch(){
    const [showName, setShowName] =  useState(false);

var name = null;
    if(showName === true){
        name = (
            <View>
                <Text>Mitch</Text>
            </View>
        )
    }

return (
   
    <View>
         {name}
      <Text>Mitch</Text>
      <Button
        title="Click"
        onPress={()=>{
            setShowName(!showName);
        }}
      />
    </View>
  );
};

export default Mitch;
