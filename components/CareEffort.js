import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../constants/WindowSize";

const options = {
  0: "Easy",
  1: "Medium",
  2: "Hard",
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
              key={key}
              onPress={() => {
                setEffort(options[key]);
              }}>
              <View style={styles.button}>
                <View style={options[key]==effort?styles.selectedIconBorder : styles.iconBorder}>
                  <Text style={options[key]==effort? styles.selectedText : styles.text}>{options[key]}</Text>
                </View>
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
    justifyContent: "space-evenly",
    width: Math.min(windowWidth*0.5, 200)
  },
  button: {
    flex: 1,
    flexDirection: "row",
    margin: 30,
    marginLeft: Math.min(10, windowWidth*0.01),
    marginRight: Math.min(10, windowWidth*0.01)
  },
  text: {
    color: "#7EA480",
    fontFamily: "Rubik",
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  selectedText: {
    color: "#ECF0F3",
    fontFamily: "Rubik",
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  question: {
    color: "#7EA480",
    fontFamily: "Rubik",
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  iconBorder: {
    borderColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.3, 150),
    height: Math.min(windowWidth * 0.2, 100),
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIconBorder: {
    borderColor: "#ECF0F3",
    backgroundColor: "#7EA480",
    borderWidth: 3,
    borderRadius: Math.min(200 * 0.23, windowWidth * 0.3 * 0.23),
    width: Math.min(windowWidth * 0.3, 150),
    height: Math.min(windowWidth * 0.2, 100),
    alignItems: "center",
    justifyContent: "center",
  }
});

export default CareEffort;
