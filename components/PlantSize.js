import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Small.png',
    value: 'Small',
    text: '< 6 feet'
  },
  1: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Medium.png',
    value: 'Medium',
    text: '6-15 feet'
  },
  2: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/c_pad,h_400,w_400/v1614037274/Large.png',
    value: 'Large',
    text: '> 15 feet'
  },
//   3: {
//     uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.29_PM_cgbwzq.png',
//     value: 'Any',
//   }
};

const PlantSize = (props) => {
  const [size, updateSize] = useState("Medium");
  
  const {navigation, sunlight, temperature} = props;

  const onPressHandler = (choice) => {
    updateSize(options[choice].value); 
    navigation.navigate('HumidityScreen', {
      sunlight,
      temperature,
      size
    });
  }

  const skip = ({navigation, sunlight, temperature}) => {
    navigation.navigate('HumidityScreen', {
      sunlight,
      temperature,
      size: 'Any'
    })
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => skip({navigation, sunlight, temperature})}>
          <Text>Skip</Text></TouchableOpacity>
      ),
    });
  }, [navigation, sunlight, temperature]);
  
  return (
    <View style={styles.mainContainer}>
      <Text>What size plant are you looking for?</Text>
      <View style={styles.container}>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {onPressHandler(key)}} style={options[key].value==size? styles.selected : styles.regular}><Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.image}/><Text>{options[key].text}</Text></TouchableOpacity>)
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

export default PlantSize;
