import React, {useState} from 'react';
import {
View,
Text,
Button
} from 'react-native';

function Karen(){
    const [greet, setGreet] = useState(false);

    var gr = null;
    if(greet === true){
        <View>
            gr=(<Text>Karen</Text>)
        </View>

    }
    else{
        <View>
            gr = (<Text>Hi!</Text>)
        </View>
    }


    return(
        
        <View>
            {gr}
        <Button
            title="Click"
            onPress={()=>{
                setGreet(!setGreet);
            }}
        />
        </View>
    )
}

export default Karen;

