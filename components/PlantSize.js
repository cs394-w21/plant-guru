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
          <View style={styles.headerBox}>
            <Text style={styles.text}>Skip</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, sunlight, temperature]);
  
  return (
    <>
      <Text style={styles.question}>What size plant are you looking for?</Text>
      
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {onPressHandler(key)}}>
            <View style={styles.button}>
              <Image source={{uri: options[key].uri}} resizeMode="contain" style={styles.iconBorder}/>
            <View style={styles.textBox}>
              <Text style={styles.text}>{options[key].text}</Text>
            </View>
            </View>            
            
            </TouchableOpacity>)
        })
      }
      
    </>
  )
};

const buttonStyle = {
  width: 0.05*windowWidth,
  height: 0.05*windowWidth,
  alignItems: 'center',
  
};

const styles = StyleSheet.create({
  button:{
    flex: 1,
    flexDirection: 'row',
    margin: 30
  },
  text: {
    color: '#7EA480',
    fontFamily: 'Rubik',
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  question: {
    color: '#7EA480',
    fontFamily: 'Rubik',
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  iconBorder: {
    borderColor: '#7EA480',
    borderWidth: 3,
    borderRadius: Math.min(200*0.23, windowWidth*0.3*0.23),
    width: Math.min(windowWidth*0.3, 150),
    height: Math.min(windowWidth*0.3, 150),
    alignItems: 'center',
    justifyContent: 'center'

  },
  textBox: {
    width: Math.min(windowWidth*0.3, 150),
    height: Math.min(windowWidth*0.3, 150),
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '90%',
    height: '90%',
    marginBottom: 10
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

export default PlantSize;
