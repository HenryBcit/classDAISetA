import React, {useState} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
//import styles from './styles/MainStyles';
import Naomi from '../comps/Naomi'
function Main(){
  const [showMenu, setShowMenu] = useState(false);

  var menu = null;
  if(showMenu === true){
    menu = (
      <View>
        <Button
          title="Page 1"
          onPress={()=>{}}
        />
        <Button
          title="Page 2"
          onPress={()=>{}}
        />
      </View>
    )
  }

  return (
    <View>
      {menu}
      <Button
        title="Menu"
        onPress={()=>{
          setShowMenu(!showMenu);
        }}
      />
      <Button
        title="Image"
        onPress={()=>{
        }}
      />
    </View>
  );
};

export default Main;
