
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

function Naomi(){
    const[showGreets, setShowGreets] = useState(false);
   

  var greets = null;  
  
  if(showGreets === true){
      greets = (
        <View>
            <Text>hi, its naomi</Text>
        </View>
      )
  }


return (
  <View>
      {greets}
        <Button
              title="Press Me"
              onPress={()=>{
                  setShowGreets(!showGreets);
              }}
        />
  </View>
);

};

export default Naomi;
