import React, {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';
import Slider from '@react-native-community/slider';

const Humidity = (props) => {
    const {value, setValue} = props;
    return(
        <View style={styles.container}>
            <Text>
            What is the average humidity in your space (0-50%)? : {value} 
            </Text>
            <Slider
                maximumValue={50}
                minimumValue={0}
                step={1}
                value={value}
                onValueChange={
                    (value) => setValue(value)
                }
                style={styles.slider}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        width: '100%',
        marginTop: 20
      },
      slider: {
          width: '50%',
          marginTop: -5
      }
})

export default Humidity;