import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

const options = {
    0: "Easy",
    1: "Medium",
    2: "Hard",
    3: "Guru",
}

const CareEffort = (props) => {
    const {effort, setEffort} = props;

    return (
      <View style={styles.mainContainer}>
          <Text>How much effort are you willing to put in?</Text>
          <View style={styles.container}>
          {
          Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} 
          onPress={() => {setEffort(options[key])}} 
          style={options[key]==effort? styles.selected : styles.regular}>
              <Text>{options[key]}</Text>
          </TouchableOpacity>)
         })
        }
        </View>
      </View>
    );
};

const buttonStyle = {
width: 0.04*windowWidth,
height: 0.02*windowWidth,
justifyContent: 'center',
alignItems: 'center'
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

export default CareEffort;
