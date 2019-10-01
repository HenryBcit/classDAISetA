import React, {useState} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import styles from '../styles/AppStyles'
import Main from '../comps/Main';

function App(){
// Show Greets, hide Greets xD
  const [showGreets, setGreets] = useState(false);

  var greets = null;
  if(showGreets === true){
    greets = (
      <View>
        <Button
        title='When september ends'
        onPress={()=>{}}
        />
      </View>
    )
}
  return (

    <View style={styles.app}>
      <Main />
        <Button 
        title="Wake me up"
        onPress={()=>{
        setGreets(!greets);
      }}
      />
    </View>
  );
};

export default App;
