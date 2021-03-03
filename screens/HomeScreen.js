import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {windowWidth} from '../constants/WindowSize';
const HomeScreen = (props) => {
    const { navigation, route } = props;
    const onChange = (screenName) => {
        navigation.navigate(screenName);
    }
    return(
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={value => onChange("RegisterScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <AntDesign name="login" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>login</Text>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={value => onChange("SearchScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <Ionicons name="ios-add" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>add plant</Text>
            </View>

          </View>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={value => onChange("UserInputScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <Ionicons name="search-outline" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>search</Text>
            </View>

          </View>
        </TouchableOpacity>


      </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ECF0F3',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: windowWidth* 0.2,
      width: '100%',
    },
    button:{
      flex: 1,
      flexDirection: 'row',
      margin: 30
    },
    text: {
      color: '#7EA480',
      fontFamily: 'Rubik',
      fontSize: 20,
      lineHeight: 21,
      letterSpacing: -0.28,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    },
    iconBorder: {
      borderColor: '#7EA480',
      borderWidth: 3,
      borderRadius: windowWidth*0.3*0.23,
      width: windowWidth*0.3,
      height: windowWidth*0.3,
      alignItems: 'center',
      justifyContent: 'center'

    },
    textBox: {
      width: windowWidth*0.3,
      height: windowWidth*0.3,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default HomeScreen;