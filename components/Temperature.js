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

    // const skip = ({navigation, sunlight}) => {
    //   navigation.navigate('SizeScreen', {
    //     sunlight,
    //     temperature: 'Any'
    //   })
    // }

    const next = ({navigation, sunlight, temperature}) => {
      navigation.navigate('SizeScreen', {
        sunlight,
        temperature
      })
    }

    // React.useLayoutEffect(() => {
    //   navigation.setOptions({
    //     headerRight: () => (
    //       <>
    //       <TouchableOpacity onPress={() => next({navigation, sunlight, temperature})}>
    //         <View style={styles.headerBox}>
    //           <Text style={styles.text}>Next</Text>
    //         </View>
    //       </TouchableOpacity>
    //       {/* <TouchableOpacity onPress={() => skip({navigation, sunlight})}>
    //         <View style={styles.headerBox}>
    //           <Text style={styles.text}>Skip</Text>
    //         </View>
    //       </TouchableOpacity> */}
    //       </>
    //     ),
    //   });
    // }, [navigation, sunlight, temperature]);

    return(
        <>
            <Text style={styles.question}>
            What is the average temperature of your plant space?
            </Text>
            <Text style={styles.text}>
            {temperature+' °F'} 
            </Text>
            <MultiSlider
                min={50}
                max={90}
                step={5}
                values={getTemperatureFromString(temperature)}
                onValuesChange={
                    (values) => {setTemperature(`${values[0]}-${values[1]}`)}
                }
                selectedStyle={styles.slider}
            />
            <TouchableOpacity style={styles.button}onPress={() => next({navigation, sunlight, temperature})}>
              <View style={styles.headerBox}>
                <Text style={styles.text}>Confirm</Text>
              </View>
            </TouchableOpacity>
        </>
        
    )
};

const styles = StyleSheet.create({
  text: {
    color: '#7EA480',  
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  question: {
    color: '#7EA480',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: windowWidth*0.1,
    width: windowWidth*0.8,
  },
  textBox: {
    width: Math.min(windowWidth*0.3, 150),
    height: Math.min(windowWidth*0.3, 150),
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBox: {
    borderColor: '#7EA480',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.4),
    height: Math.min(50, windowWidth*0.15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Math.min(20, windowWidth*0.01),
  },
  slider: {
    backgroundColor: '#EF6F55',
  },
  button: {
    margin: 30,
  }
})

export default Temperature;