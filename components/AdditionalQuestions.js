import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
// import Allergies from './Allergies';
import CareEffort from "./CareEffort";
import Children from "./Children";
import Pets from "./Pets";
// import PlantSize from './PlantSize';
// import SunlightInput from './Sunlight';
// import Temperature from './Temperature';
// import Humidity from './Humidity';


const AdditionalQuestions = (props) => {
  const [pets, setPets] = useState("No");
  const [children, setChildren] = useState("No");
  const [effort, setEffort] = useState("Medium");
  
  const {
    navigation,
    sunlight,
    temperature,
    size,
    humidity
  } = props;

  const skip = ({navigation, sunlight, temperature, size, humidity}) => {
    navigation.navigate('PlantResultsScreen', {
      sunlight,
      temperature,
      size,
      humidity,
      children: 'Any',
      pets: 'Any',
      effort: 'Any'
    })
  }

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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
        <TouchableOpacity onPress={() => next({navigation, sunlight, temperature, size, humidity, children, pets, effort})}>
          <Text>Next</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => skip({navigation, sunlight, temperature, size, humidity})}>
          <Text>Skip</Text></TouchableOpacity>
        </>
      ),
    });
  }, [navigation, sunlight, temperature, size, humidity, children, pets, effort]);

  return (
    <View style={styles.container}>
      <CareEffort setEffort={setEffort} effort={effort}/>
      <Pets setPets={setPets} pets={pets}/>
      <Children setChildren={setChildren} children={children}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: '#006400',
    padding: 10
  },
  submit: {
    color: 'white'
  }
});

export default AdditionalQuestions;
