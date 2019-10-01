import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';

function Peter(){

    const [changeText, setChangeText] = useState(false);

    var greets = null;
    if(changeText === true){
        greetes = (
            <Text style={{color:"red"}}>My name is Peter</Text>
        )
    } else{
        greets = (
            <Text style={{color:"blue"}}>Hi!</Text>
        )
    }

    return(
        <View>
           {greets}
            <Button 
                title="Press me"
                onPress={()=>{setChangeText(!changeText)}}
            />
        </View>
    )
}

export default Peter;