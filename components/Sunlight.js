import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

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
  }
};

const SunlightInput = (props) => {

  const [sunlight, updateSunlight] = useState("High"); 

  const {navigation} = props;

  const onPressHandler = (choice) => {
    updateSunlight(options[choice].value); 
    navigation.navigate('TemperatureScreen', {sunlight: options[choice].value});
  }

  // const skip = ({navigation}) => {
  //   navigation.navigate('TemperatureScreen', {
  //     sunlight: 'Any'
  //   })
  // }

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity onPress={() => skip({navigation})}>
  //         <View style={styles.headerBox}>
  //           <Text style={styles.text}>Skip</Text>
  //         </View>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <>
      <Text style={styles.question}>What's the kind of sun exposure you receive in your space?</Text>
      
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

export default SunlightInput;
