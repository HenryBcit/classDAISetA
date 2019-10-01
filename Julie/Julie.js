import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function Julie(){
    const [showText, setShowText] = useState("Julie");

    // UI
    return (
        <View>
            <Text>{showText}</Text>
            <Button
                title = "Click Me"
                onPress = {()=>{
                    setShowText("Hi there!")
                }}
            />
        </View>
    )
}

export default Julie;