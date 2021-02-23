import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
    0: "No",
    1: "Yes"
}

const Allergies = (props) => {
    const [allergies, updateAllergies] = useState("");  

    
    return (
      <View style={styles.container}>
          <Text> Do you or anyone in your household have any plant allergies?</Text>
          {
          Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} 
          onPress={() => {updateAllergies(options[key])}} 
          style={options[key]==allergies? styles.selected : styles.regular}>
              <Text>{options[key]}</Text>
          </TouchableOpacity>)
         })
        }
      </View>
    )
  };

  const buttonStyle = {
    width: 0.1*windowWidth,
    height: 0.1*windowWidth,
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flex: 1,
    },
    selected: {
      ...buttonStyle,
      backgroundColor: 'green',
      borderColor: 'grey',
      borderWidth: 2
    },
    regular: {
      ...buttonStyle,
      backgroundColor: 'white'
    },
    image: {
      width: '95%',
      height: '95%',
      borderRadius: 20,
      marginBottom: 10
    }
  })
  
  export default Allergies;
