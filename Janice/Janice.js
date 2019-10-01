import React {useState} from 'react';
import {
   Text,
   View,
   Button
} from 'react-native';

function Janice(){
   const [showText, setShowText] = useState("Janice") 

   return(
      <View>
         <Text>{useState}</Text>
         <Button
            title="Click"
            onPress={()=>{
               setShowText("Hello")
            }}
         />
      </View>
   )
}

export default Janice;