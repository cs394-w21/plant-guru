import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1615408802/Fewer_Than_Four_ligojj.png',
    value: 'Low',
    text: '< 4 hours'
  },
  1: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1615408802/Four_to_Six_Hours_fpcp1m.png',
    value: 'Medium',
    text: '4-6 hours'
  },
  2: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1615408802/More_Than_Six_Hours_gtwrqg.png',
    value: 'High',
    text: '> 6 hours'
  }
};

const SunlightInput = (props) => {

  const [sunlight, updateSunlight] = useState("High"); 

  const {navigation} = props;

  const onPressHandler = (choice) => {
    updateSunlight(options[choice].value); 
    navigation.navigate('TemperatureScreen', {sunlight: options[choice].value});
  }

  return (
    <>
      <Text style={styles.question}>How much sun exposure does your space receive?</Text>
      
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity style={styles.button} key={key} onPress={() => {onPressHandler(key)}}>
                      <Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.iconBorder}/>
                  </TouchableOpacity>)
        })
      }
    </>
  )
};

const styles = StyleSheet.create({
  button:{
    flex: 1,
    flexDirection: 'row',
    margin: windowWidth*0.1,
  },
  text: {
    color: '#7EA480',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  question: {
    color: '#7EA480',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    width: windowWidth*0.8
  },
  iconBorder: {
    width: windowWidth*0.3,
    height: windowWidth*0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    width: Math.min(windowWidth*0.2, 100),
    height: Math.min(windowWidth*0.2, 100),
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
  image: {
    width: '90%',
    height: '90%',
  },
  headerBox: {
    borderColor: '#7EA480',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.2),
    height: Math.min(50, windowWidth*0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Math.min(20, windowWidth*0.01)
  }
})

export default SunlightInput;
