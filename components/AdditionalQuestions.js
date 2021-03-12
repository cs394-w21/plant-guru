import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import CareEffort from "./CareEffort";
import Children from "./Children";
import Pets from "./Pets";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const AdditionalQuestions = (props) => {
  const [pets, setPets] = useState();
  const [children, setChildren] = useState();
  const [effort, setEffort] = useState();
  
  const {
    navigation,
    sunlight,
    temperature,
    size,
    humidity
  } = props;

  const isNextEnabled = pets && children && effort;

  const next = ({navigation, sunlight, temperature, size, humidity, children, pets, effort}) => {
    navigation.navigate('PlantResultsScreen', {
      sunlight,
      temperature,
      size,
      humidity,
      children,
      pets,
      effort
    })
  }

  return (
    <>
      <CareEffort setEffort={setEffort} effort={effort}/>
      <Pets setPets={setPets} pets={pets}/>
      <Children setChildren={setChildren} children={children}/>
      <TouchableOpacity style={isNextEnabled ? styles.headerBox : styles.headerBoxDisabled} disabled={!isNextEnabled} onPress={() => next({navigation, sunlight, temperature, size, humidity, children, pets, effort})}>
          <Text style={isNextEnabled ? styles.text : styles.textDisabled}>Next</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    borderColor: '#7EA480',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.4),
    height: Math.min(50, windowWidth*0.15),
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth*0.1
  },
  headerBoxDisabled: {
    backgroundColor: '#c8c8c8',
    borderColor: '#787878',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.4),
    height: Math.min(50, windowWidth*0.15),
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth*0.1
  },
  text: {
    color: '#7EA480',
    
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center'
  },
  textDisabled: {
    color: '#787878',
    
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center'
  },
});

export default AdditionalQuestions;
