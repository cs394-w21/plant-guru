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
  const [sunlight, updateSunlight] = useState(""); 
  const [allergies, updateAllergies] = useState("");
  const [size, updateSize] = useState("");  
  const [pets, setPets] = useState("");
  const [children, setChildren] = useState("");
  const [effort, setEffort] = useState("");
  const [temperature, setTemperature] = useState(55);
  const [humidity, setHumidity] = useState(0);

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
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default InputForm;
