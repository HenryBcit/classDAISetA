import React, {useState} from 'react';
import {
  View,
  Text,
  Button

 
} from 'react-native';
//import styles from './styles/AppStyles';



function Main(){
  const [showMenu, setShowMenu] = useState(false);
 


  var menu = null;
  if(showMenu === true){
    menu = (
      <View>

      <Button
        title="Page1"
        onPress={()=>{}}
        />
    
     <Button
        title="Page2"
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


    </View>

    

  );
};

export default Main;