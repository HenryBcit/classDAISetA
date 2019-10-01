/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Main from './comps/Main'

function App(){
  const [initialName, SetInitialName] = useState(false);
  var MyName = null;


  if (initialName === true){
    MyName = (
    <View> 
        <Image
            style={{width: 150, height: 190, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}
            source={require('../imgs/puppies.jpg')}
            />
        <Text>This is actually Me</Text>
    </View>
    )
}


  return (
    <View>
      <Text>{MyName}</Text>
    
      <Button
                title="Check My Name"
                onPress={() => {
                    SetInitialName("Jeanos is here");
                }}
            /> 

    <Main/>

    </View>

   
  )
}


export default App;
