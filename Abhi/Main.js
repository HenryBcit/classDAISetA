/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button
} from 'react-native';
import Name from './rancom';

import styles from "../styles/AppStyles";
import Page1 from "./Page1";

function Main(){
    const  [showMenu, setShowMenu] = useState(false);

    let menu = null;
    if (showMenu===true){
        menu = (
            <View>
                <Name />
            </View>
        )

    }
    return(
        <View style={styles.main}>
            {menu}
            <Button title={"Click For Name"} onPress={()=>{
                setShowMenu(!showMenu);
            }}/>
        </View>
    )
}


export default Main;
