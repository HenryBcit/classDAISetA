import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

function NameGreeting(){
    const [sayHi, setSayHi] = useState(false);
    var msg = "Kaan Darcey";
    if(sayHi == true){
        msg = (
            <View>
                <Text style={{color:"hotpink", backgroundColor:"#000", fontFamily:"sans sariff", fontSize:18}}>What's up</Text>
            </View>
        )
    }
    return(
        <View>
            <Text style={{color:"#BED", fontFamily:"sans-sariff", fontSize:"16", fontStyle:"italic"}} onPress={()=>{
                setSayHi(!sayHi)
            }}>{msg</Text>
        </View>
    )
}

export default NameGreeting;