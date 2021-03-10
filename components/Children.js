import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../constants/WindowSize";

const options = {
  0: "No",
  1: "Yes",
};

const Children = (props) => {
  const { children, setChildren } = props;
  return (
    <>
      <Text style={styles.question}>Are there children in the household?</Text>
      <View style={styles.buttonContainer}>
        {Object.keys(options).map((key) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={key}
              onPress={() => {
                setChildren(options[key]);
              }}>
              <View style={options[key]==children?styles.selectedIconBorder : styles.iconBorder}>
                  <Text style={options[key]==children? styles.selectedText : styles.text}>{options[key]}</Text>
                </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    textAlignVertical: 'center',
    alignItems: 'center',
    width: windowWidth*0.5,
    marginLeft: -windowWidth*0.1,
    minHeight: windowWidth*0.2,
    maxHeight: windowWidth*0.2,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  text: {
    color: "#7EA480",
    
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
  },
  selectedText: {
    color: "#ECF0F3",
    
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
  },
  question: {
    color: "#7EA480",
    
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  iconBorder: {
    borderColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.2, 100),
    height: Math.min(windowWidth * 0.1, 50),
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIconBorder: {
    borderColor: "#7EA480",
    backgroundColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.2, 100),
    height: Math.min(windowWidth * 0.1, 50),
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Children;
