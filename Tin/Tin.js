import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function Tin(){
    const [clicked, setClicked] = useState(true);

    let msg = null;

    if (clicked===true){
        msg= "Tin Hoang"
    } else {
        msg = "Hey"
    }

    return(
        <View style={{flex: 1, alignItems: "stretch", justifyContent: "space-around"}}>
            <Text>{msg}</Text>
            <Button
                style={{width: 350, padding: 20, color: "#d3b594", borderColor: "#d3b594", borderRadius: 20, borderWidth: 0.5, backgroundColor: "#fef6eb"}}
                title={"Hit Me"}
                onPress={()=>{
                setClicked(!clicked);
            }}/>
        </View>
    )
}
