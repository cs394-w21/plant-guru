import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
  0: 'Low',
  1: 'Medium',
  2: 'High',
//   3: {
//     value: 'Any',
//     text: 'Any'
//   }
};

const Humidity = (props) => {

  const [humidity, updateHumidity] = useState("High"); 

  const {
      navigation,
      sunlight,
      temperature,
      size
    } = props;

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
          <Text>Skip</Text></TouchableOpacity>
      ),
    });
  }, [navigation, sunlight, temperature, size]);
  
  return (
    <View style={styles.mainContainer}>
      
      <Text>What's the kind of humidity you receive in your space?</Text>
      
      <View style={styles.container}>
      {
        Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} onPress={() => {onPressHandler(key)}} style={options[key]==humidity? styles.selected : styles.regular}><Text>{options[key]}</Text></TouchableOpacity>)
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

export default Humidity;
