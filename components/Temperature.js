import React, {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';
import Slider from '@react-native-community/slider';

const Temperature = (props) => {
    const {value, setValue} = props;
    return(
        <View>
            <Text>
                Temperature : {value} 
            </Text>
            <Slider
                maximumValue={90}
                minimumValue={55}
                step={1}
                value={value}
                onValueChange={
                    (value) => setValue(value)
                }
            />
        </View>
        
    )
};

export default Temperature;