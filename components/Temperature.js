import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';
import Slider from '@react-native-community/slider';

const Temperature = (props) => {
    const [temperature, setTemperature] = useState(68);

    const {sunlight, navigation} = props;

    return(
        <View style={styles.container}>
            <Text>
            What is the average temperature expected in your space? : {temperature} 
            </Text>
            <Slider
                maximumValue={90}
                minimumValue={55}
                step={1}
                value={temperature}
                onValueChange={
                    (temp) => {setTemperature(temp)}
                }
                style={styles.slider}
            />
            <TouchableOpacity onPress={() => {navigation.navigate("SizeScreen", {
                sunlight, 
                temperature,
            })}}>
              <Text>Next</Text>
            </TouchableOpacity>
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

export default Temperature;