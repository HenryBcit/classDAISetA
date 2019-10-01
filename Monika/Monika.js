import React, {useState} from 'react';
import {View,Text,Button} from 'react-native';

function Monika(){
    const[showHi, setShowHi] =  useState(false)

var name = null;
if (showHi === true){

    name = (  
    <View>
        <Button 
        title= "Monika"
        onPress = {()=>{}}
        />

    </View>
)
}



return(
    <View>
        {name}
        <Button
        title="Monika"
        onPress={()=>{
            setShowHi (!showHi);
        }}
        />
    </View>
)
    }

export default Monika;