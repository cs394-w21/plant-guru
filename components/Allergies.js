import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { windowWidth, windowHeight } from '../constants/WindowSize';

const options = {
    0: "No",
    1: "Yes"
}

const Allergies = (props) => {
    const {allergies, updateAllergies} = props;

    
    return (
      <View style={styles.mainContainer}>
          <Text> Do you or anyone in your household have any plant allergies?</Text>
          <View style={styles.container}>
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
      </View>
    )
  };

  const buttonStyle = {
    width: 0.03*windowWidth,
    height: 0.02*windowWidth,
    alignItems: 'center',
    justifyContent: 'center'
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flex: 1,
      textAlign: 'center',
      width: '50%',
      margin: 10,
    },
    mainContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.5,
      width: '100%',
      margin: 10,
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
    }
  })
  
  export default Allergies;
