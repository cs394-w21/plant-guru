import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

const options = {
    0: "No",
    1: "Yes"
}

const Pets = (props) => {
    const [pets, setPets] = useState("");

    return (
      <View style={styles.container}>
          <Text>Are there pets in the household?</Text>
          {
          Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} 
          onPress={() => {setPets(options[key])}} 
          style={options[key]==pets? styles.selected : styles.regular}>
              <Text>{options[key]}</Text>
          </TouchableOpacity>)
         })
        }
      </View>
    );
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

export default Pets;
