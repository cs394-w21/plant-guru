import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.16_PM_krn59b.png',
    value: 'Low',
  },
  1: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.10_PM_nzyw3b.png',
    value: 'Medium',
  },
  2: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.56.58_PM_b89vxj.png',
    value: 'High',
  },
  3: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.29_PM_cgbwzq.png',
    value: 'Any',
  }
};

const SunlightInput = (props) => {
  const [sunlight, updateSunlight] = useState("");  
  
  return (
    <View style={styles.container}>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {updateSunlight(options[key].value)}} style={options[key].value==sunlight? styles.selected : styles.regular}><Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.image}/></TouchableOpacity>)
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

export default SunlightInput;
