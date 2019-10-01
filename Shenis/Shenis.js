import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function Shenis() {
  const [showGreet, setShowGreet] = useState(false);

  var grt = null;

  if (showGreet === true) {
    grt = (
      <View>
        <Text>Hi!</Text>
      </View>
    )
  }

  return (
    <View>
    {grt}

    <Button 
    title="Shenis"
    onPress={ () => {
      setShowGreet(!showGreet);
    }}
    />
    </View>
  );
};

export default Shenis;