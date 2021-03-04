import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Temperature = (props) => {
    const [temperature, setTemperature] = useState('65-75');

    const {sunlight, navigation} = props;

    const getTemperatureFromString = (temperatureString) => {
      const range = temperatureString.split('-');
      return [Number(range[0]), Number(range[1])]
    }

    const skip = ({navigation, sunlight}) => {
      navigation.navigate('SizeScreen', {
        sunlight,
        temperature: 'Any'
      })
    }

    const next = ({navigation, sunlight, temperature}) => {
      navigation.navigate('SizeScreen', {
        sunlight,
        temperature
      })
    }

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <>
          <TouchableOpacity onPress={() => next({navigation, sunlight, temperature})}>
            <Text>Next</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => skip({navigation, sunlight})}>
            <Text>Skip</Text></TouchableOpacity>
          </>
        ),
      });
    }, [navigation, sunlight, temperature]);

    return(
        <View style={styles.container}>
            <Text>
            What is the average temperature expected in your space? : {temperature} 
            </Text>
            <MultiSlider
                min={50}
                max={90}
                step={5}
                values={getTemperatureFromString(temperature)}
                onValuesChange={
                    (values) => {setTemperature(`${values[0]}-${values[1]}`)}
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

export default Temperature;