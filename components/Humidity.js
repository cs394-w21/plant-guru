import React, {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';
import Slider from '@react-native-community/slider';

const Humidity = (props) => {
    const {value, setValue} = props;
    return(
        <View>
            <Text>
                Humidity : {value} 
            </Text>
            <Slider
                maximumValue={50}
                minimumValue={0}
                step={1}
                value={value}
                onValueChange={
                    (value) => setValue(value)
                }
            />
        </View>
        
    )
};

export default Humidity;