import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';


function HiDoris(){
    const[showHi, setShowHi] = useState(false);

    var doris = null;

    if(showHi === true){
        doris = 
        <View>
            <Text> Hi </Text>
        </View>
    }

    return (
        <View> 
            {doris}
            <Text> Doris </Text>
            <Button 
                title="Say Hi"
                onPress={()=>{
                    setShowHi(!showHi);
                }}
                />
        </View>
    );
};

export default HiDoris;