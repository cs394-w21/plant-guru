import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1614917409/Plants/Screen_Shot_2021-03-04_at_10.09.23_PM_blueso.png',
    value: 'Low',
    text: 'Low'
  },
  1: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1614917409/Plants/Screen_Shot_2021-03-04_at_10.09.37_PM_chgs9c.png',
    value: 'Medium',
    text: 'Medium'
  },
  2: {
    uri: 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1614917409/Plants/Screen_Shot_2021-03-04_at_10.09.53_PM_hgvskg.png',
    value: 'High',
    text: 'High'
  },
};

const Humidity = (props) => {

  const [humidity, updateHumidity] = useState("High"); 

  const {
      navigation,
      sunlight,
      temperature,
      size
  } = props;

  console.log(size);

  const onPressHandler = (choice) => {
    updateHumidity(options[choice]); 
    navigation.navigate('AdditionalQuestionsScreen', {sunlight, temperature, size, humidity});
  } 

  const skip = ({navigation, sunlight, temperature, size}) => {
    navigation.navigate('AdditionalQuestionsScreen', {
      sunlight,
      temperature,
      size,
      humidity: 'Any'
    })
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => skip({navigation, sunlight, temperature, size})}>
          <View style={styles.headerBox}>
            <Text style={styles.text}>Not sure</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, sunlight, temperature, size]);
  
  return (
    <>
      
      <Text style={styles.question}>What's the kind of humidity you receive in your space?</Text>
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
    width: '110%',
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

export default Humidity;
