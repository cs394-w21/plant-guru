import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {windowWidth} from '../constants/WindowSize';
import UserContext from '../contexts/UserContext';
import { firebase } from '../utils/firebase';

const HomeScreen = (props) => {
    const { navigation, route } = props;
    const loggedIn = useContext(UserContext);

    const onChange = (screenName) => {
        navigation.navigate(screenName);
    }

    async function handleOnLogout() {
      try {
        await firebase.auth().signOut();
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.log(error);
      };
    };

    const handleLoginLogout = () => {
      if (loggedIn) {
        handleOnLogout();
      } else {
        navigation.navigate('RegisterScreen');
      }
    };

    return(
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.button}
          onPress={() => onChange('IntroScreen')}>
            <View style={styles.findIconBorder}>
            <Text style={styles.bigText}>What plants</Text>
            <Text style={styles.findText}>fit my home?</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => onChange("SearchScreen")}>
            <View style={styles.iconBorder}>
              <Text style={styles.text}>Search plants</Text>
              <Ionicons name="search-outline" size={45} color="#7EA480" />
            </View>
        </TouchableOpacity>

        {loggedIn? <TouchableOpacity style={styles.button}
          onPress={() => onChange("UserFavoriteScreen")}>
            <View style={styles.iconBorder}>
              <AntDesign name="hearto" size={45} color="#7EA480" />
              <Text style={styles.text}>My Favorites</Text>
            </View>
        </TouchableOpacity> : null}

        <TouchableOpacity style={styles.button}
          onPress={() => handleLoginLogout()}>
            <View style={styles.loginIconBorder}>
              <Text style={styles.loginText}>{loggedIn ? 'Logout' : 'Login'}</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },  
  container: {
      flex: 1,
      backgroundColor: '#ECF0F3',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '90%',
      height: '100%',
      flexDirection: 'column'
    },
    button:{
      flex: 1,
      flexDirection: 'row',
      margin: 30
    },
    findText: {
      color: '#ECF0F3',
      fontSize: 25,
      alignItems: 'center',
      textAlign: 'center'
    },
    text: {
      color: '#7EA480',
      fontSize: 34,
      alignItems: 'center',
      textAlign: 'center',
      padding: windowWidth*0.03
    },
    loginText: {
      color: '#7EA480',
      fontSize: 25,
      alignItems: 'center',
      textAlign: 'center',
      padding: windowWidth*0.03
    },
    bigText: {
      color: '#ECF0F3',
      fontSize: 35,
      alignItems: 'center',
      textAlign: 'center',
      paddingBottom: windowWidth*0.01
    },
    findIconBorder: {
      borderColor: '#7EA480',
      backgroundColor: "#7EA480",
      borderWidth: 3,
      borderRadius: windowWidth*0.3*0.23,
      width: windowWidth*0.8,
      height: windowWidth*0.3,
      alignItems: 'center',
      justifyContent: 'center'

    },
    iconBorder: {
      borderColor: '#7EA480',
      borderWidth: 3,
      borderRadius: windowWidth*0.3*0.23,
      width: windowWidth*0.8,
      height: windowWidth*0.3,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    loginIconBorder: {
      borderColor: '#7EA480',
      borderWidth: 1.5,
      borderRadius: windowWidth*0.15*0.23,
      width: windowWidth*0.5,
      height: windowWidth*0.15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    textBox: {
      width: Math.min(windowWidth*0.3, 200),
      height: Math.min(windowWidth*0.3, 200),
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default HomeScreen;