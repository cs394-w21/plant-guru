import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../constants/WindowSize";

const options = {
  0: "Low",
  1: "Medium",
  2: "High",
};

const CareEffort = (props) => {
  const { effort, setEffort } = props;

  return (
    <>
      <Text style={styles.question}>
        How much effort are you willing to put in?
      </Text>
      <View style={styles.buttonContainer}>
        {Object.keys(options).map((key) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={key}
              onPress={() => {
                setEffort(options[key]);
              }}>
                <View style={options[key]==effort?styles.selectedIconBorder : styles.iconBorder}>
                  <Text style={options[key]==effort? styles.selectedText : styles.text}>{options[key]}</Text>
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
    width: windowWidth*0.9,
    marginLeft: -windowWidth*0.1,
    paddingLeft: windowWidth*0.05,
    minHeight: windowWidth*0.2,
    maxHeight: windowWidth*0.2
  },
  button: {
    flex: 1,
    flexDirection: "row",
    //margin: windowWidth*0.1,
  },
  text: {
    color: "#7EA480",
    
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  selectedText: {
    color: "#ECF0F3",
    
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  question: {
    color: "#7EA480",
    
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  iconBorder: {
    borderColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.25, 100),
    height: Math.min(windowWidth * 0.1, 50),
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIconBorder: {
    borderColor: "#7EA480",
    backgroundColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.25, 100),
    height: Math.min(windowWidth * 0.1, 50),
    alignItems: "center",
    justifyContent: "center",
  }
});

export default CareEffort;
