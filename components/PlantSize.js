import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Small.png',
    value: 'Small',
    text: '0-1 feet'
  },
  1: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614037274/Medium.png',
    value: 'Medium',
    text: '1-2 feet'
  },
  2: {
    uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/c_pad,h_400,w_400/v1614037274/Large.png',
    value: 'Large',
    text: '>2 feet'
  },
//   3: {
//     uri: 'https://res.cloudinary.com/dl4deex1m/image/upload/v1614034706/Screen_Shot_2021-02-22_at_4.57.29_PM_cgbwzq.png',
//     value: 'Any',
//   }
};

const PlantSize = (props) => {
  const [size, updateSize] = useState([]);
  
  const {navigation, sunlight, temperature} = props;

  const onPressHandler = (choice) => {
    const val = options[choice].value;
    size.includes(val) ? updateSize(size.filter(v => v !== val)) : updateSize([...size, val]);
  };

  useEffect(() => {
    console.log(size);
  }, [size]);

  const next = ({navigation, sunlight, temperature, size}) => {
    navigation.navigate('HumidityScreen', {
      sunlight,
      temperature,
      size
    });
  };

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity disabled={size.length === 0} onPress={() => next({navigation, sunlight, temperature, size})}>
  //         <View style={size.length === 0 ? styles.headerBoxDisabled : styles.headerBox}>
  //           <Text style={size.length === 0 ? styles.textDisabled : styles.text}>Next</Text>
  //         </View>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation, sunlight, temperature, size]);
  
  return (
    <>
      <Text style={styles.question}>What size plant are you looking for? Select all that apply.</Text>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {onPressHandler(key)}}>
            <View style={styles.button}>
              <Image source={{uri: options[key].uri}} resizeMode="contain" style={size.includes(options[key].value) ? styles.selectedIconBorder : styles.iconBorder} />
            <View style={styles.textBox}>
              <Text style={styles.text}>{`${options[key].value}\n(${options[key].text})`}</Text>
            </View>
            </View>
            </TouchableOpacity>)
        })
      }
      <TouchableOpacity disabled={size.length === 0} onPress={() => next({navigation, sunlight, temperature, size})}>
        <View style={size.length === 0 ? styles.headerBoxDisabled : styles.headerBox}>
          <Text style={size.length === 0 ? styles.textDisabled : styles.text}>Next</Text>
        </View>
      </TouchableOpacity>
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
  textDisabled: {
    color: '#787878',
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
    borderColor: '#ecf0f3',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(windowWidth*0.2, 100),
    height: Math.min(windowWidth*0.2, 100),
    alignItems: 'center',
    justifyContent: 'center'

  },
  textBox: {
    width: Math.min(windowWidth*0.2, 100),
    height: Math.min(windowWidth*0.2, 100),
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
  },
  headerBoxDisabled: {
    backgroundColor: '#c8c8c8',
    borderColor: '#787878',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.2),
    height: Math.min(50, windowWidth*0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Math.min(20, windowWidth*0.01)
  },
  selectedIconBorder: {
    borderColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(windowWidth*0.2, 100),
    height: Math.min(windowWidth*0.2, 100),
    alignItems: "center",
    justifyContent: "center",
  },
})

export default PlantSize;
