import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../constants/WindowSize';

const options = {
    0: "No",
    1: "Yes"
}

const Children = (props) => {

    const {children, setChildren} = props;
    return (
      <View style={styles.mainContainer}>
          <Text>Are there children in the household?</Text>
          <View style={styles.container}>
          {
          Object.keys(options).map(key => {
          return (<TouchableOpacity key={key} 
          onPress={() => {setChildren(options[key])}} 
          style={options[key]==children? styles.selected : styles.regular}>
              <Text>{options[key]}</Text>
          </TouchableOpacity>)
         })
        }
        </View>
      </View>
    );
};

const buttonStyle = {
width: 0.03*windowWidth,
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
    backgroundColor: 'white',
    borderColor: 'green',
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

export default Children;
