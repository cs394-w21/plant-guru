import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Allergies from './Allergies';
import CareEffort from "./CareEffort";
import Children from "./Children";
import Pets from "./Pets";
import PlantSize from './PlantSize';
import SunlightInput from './SunlightInput';
import Temperature from './Temperature';
import Humidity from './Humidity';


const InputForm = (props) => {
  const {navigation} = props;
  const [sunlight, updateSunlight] = useState("High"); 
  const [allergies, updateAllergies] = useState("No");
  const [size, updateSize] = useState("Medium");  
  const [pets, setPets] = useState("No");
  const [children, setChildren] = useState("No");
  const [effort, setEffort] = useState("Medium");
  const [temperature, setTemperature] = useState(68);
  const [humidity, setHumidity] = useState(42);

  const handleSubmit = () => {
    navigation.navigate('HomeScreen', { sunlight, allergies, size, pets, children, effort, temperature, humidity });
  };

  return (
    <View style={styles.container}>
      <SunlightInput updateSunlight={updateSunlight} sunlight={sunlight}/>
      <Allergies updateAllergies={updateAllergies} allergies={allergies}/>
      <PlantSize updateSize={updateSize} size={size}/>
      <Pets setPets={setPets} pets={pets}/>
      <Children setChildren={setChildren} children={children}/>
      <CareEffort setEffort={setEffort} effort={effort}/>
      <Temperature setValue={setTemperature} value={temperature}/>
      <Humidity setValue={setHumidity} value={humidity}/>
      <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
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

export default InputForm;
