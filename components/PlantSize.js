import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Small.png',
    value: 'Small',
  },
  1: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Medium.png',
    value: 'Medium',
  },
  2: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/c_pad,h_400,w_400/v1614037274/Large.png',
    value: 'Large',
  },
//   3: {
//     uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.29_PM_cgbwzq.png',
//     value: 'Any',
//   }
};

const PlantSize = (props) => {
  const [size, updateSize] = useState("");  
  
  return (
    <View style={styles.container}>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {updateSize(options[key].value)}} style={options[key].value==size? styles.selected : styles.regular}><Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.image}/></TouchableOpacity>)
        })
      }
    </View>
  )
};

const buttonStyle = {
  width: 0.1*windowWidth,
  height: 0.1*windowWidth,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  selected: {
    ...buttonStyle,
    backgroundColor: 'green',
    borderColor: 'grey',
    borderWidth: 2
  },
  regular: {
    ...buttonStyle,
    backgroundColor: 'white'
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius: 20,
    marginBottom: 10
  }
})

export default PlantSize;
