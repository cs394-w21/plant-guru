import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => onChange("SunlightScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <AntDesign name="question" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Find</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onChange("SearchScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <Ionicons name="search-outline" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Search</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onChange("UserFavoriteScreen")}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <AntDesign name="hearto" size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>My Favorites</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleLoginLogout()}>
          <View style={styles.button}>
            <View style={styles.iconBorder}>
              <AntDesign name={loggedIn ? 'logout' : 'login'} size={64} color="#7EA480" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>{loggedIn ? 'Logout' : 'Login'}</Text>
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
      fontSize: 25,
      lineHeight: 21,
      letterSpacing: -0.28,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    },
    iconBorder: {
      borderColor: '#7EA480',
      borderWidth: 3,
      borderRadius: Math.min(200*0.23, windowWidth*0.3*0.23),
      width: Math.min(windowWidth*0.3, 200),
      height: Math.min(windowWidth*0.3, 200),
      alignItems: 'center',
      justifyContent: 'center'

    },
    textBox: {
      width: Math.min(windowWidth*0.3, 200),
      height: Math.min(windowWidth*0.3, 200),
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default HomeScreen;