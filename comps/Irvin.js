import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';
// import styles from './styles/MainStyles';

function Irvin(){

    // showImage false in the beginning
    const [showGreets, setShowGreets] = useState(false);

    var greets = "Greetings";

    if (showGreets === true) {
        greets = ("Hello")
    }

    return (
        <View>
            <Text>{greets}</Text>
            <Button
                title="Change Text"
                onPress={()=>{
                    setShowGreets(!showGreets);
                    //showGreets updates to true
                }}
            />
        </View>
  );
};

export default Irvin;