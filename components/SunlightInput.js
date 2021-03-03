import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.56.58_PM_b89vxj.png',
    value: 'Low',
    text: '< 4 hours'
  },
  1: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.10_PM_nzyw3b.png',
    value: 'Medium',
    text: '4-6 hours'
  },
  2: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.16_PM_krn59b.png',
    value: 'High',
    text: '> 6 hours'
  },
  3: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.29_PM_cgbwzq.png',
    value: 'Any',
    text: 'Any'
  }
};

const SunlightInput = (props) => {

  const [sunlight, updateSunlight] = useState("High"); 

  const {navigation} = props;

  const onPressHandler = (choice) => {
    updateSunlight(options[choice].value); 
    navigation.navigate('TemperatureScreen', {sunlight});
  } 
  
  return (
    <View style={styles.mainContainer}>
      
      <Text>What's the kind of sun exposure you receive in your space?</Text>
      
      <View style={styles.container}>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {onPressHandler(key)}} style={options[key].value==sunlight? styles.selected : styles.regular}><Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.image}/><Text>{options[key].text}</Text></TouchableOpacity>)
        })
      }
      </View>
    </View>
  )
};

const buttonStyle = {
  width: 0.05*windowWidth,
  height: 0.05*windowWidth,
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    textAlign: 'center',
    width: '50%',
    margin: 10
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    margin: 10
  },
  selected: {
    ...buttonStyle,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2
  },
  regular: {
    ...buttonStyle,
    backgroundColor: 'white'
  },
  image: {
    width: '90%',
    height: '90%',
    marginBottom: 10
  }
})

export default SunlightInput;
