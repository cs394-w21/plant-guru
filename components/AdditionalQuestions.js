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

  // const skip = ({navigation, sunlight, temperature, size, humidity}) => {
  //   navigation.navigate('PlantResultsScreen', {
  //     sunlight,
  //     temperature,
  //     size,
  //     humidity,
  //     children: 'Any',
  //     pets: 'Any',
  //     effort: 'Any'
  //   })
  // }

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

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <>
  //       <TouchableOpacity disabled={!isNextEnabled} onPress={() => next({navigation, sunlight, temperature, size, humidity, children, pets, effort})}>
  //           <View style={isNextEnabled ? styles.headerBox : styles.headerBoxDisabled}>
  //             <Text style={isNextEnabled ? styles.text : styles.textDisabled}>Next</Text>
  //           </View>
  //       </TouchableOpacity>
  //       {/* <TouchableOpacity onPress={() => skip({navigation, sunlight, temperature, size, humidity})}>
  //           <View style={styles.headerBox}>
  //             <Text style={styles.text}>Skip</Text>
  //           </View>
  //       </TouchableOpacity> */}
  //       </>
  //     ),
  //   });
  // }, [navigation, sunlight, temperature, size, humidity, children, pets, effort]);

  return (
    <>
      <CareEffort setEffort={setEffort} effort={effort}/>
      <Pets setPets={setPets} pets={pets}/>
      <Children setChildren={setChildren} children={children}/>
      <TouchableOpacity disabled={!isNextEnabled} onPress={() => next({navigation, sunlight, temperature, size, humidity, children, pets, effort})}>
        <View style={isNextEnabled ? styles.headerBox : styles.headerBoxDisabled}>
          <Text style={isNextEnabled ? styles.text : styles.textDisabled}>Next</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    borderColor: '#7EA480',
    borderWidth: 3,
    borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
    width: Math.min(200, windowWidth*0.2),
    height: Math.min(50, windowWidth*0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Math.min(20, windowWidth*0.01),
    marginBottom: Math.min(20, windowWidth*0.01),
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
    marginRight: Math.min(20, windowWidth*0.01),
    marginBottom: Math.min(20, windowWidth*0.01),
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
});

export default AdditionalQuestions;
