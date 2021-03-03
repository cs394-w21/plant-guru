import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
    const { navigation, route } = props;
    const onChange = (screenName) => {
        navigation.navigate(screenName);
    }
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
            onPress={value => onChange("RegisterScreen")}>
                <Text>Click here to login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={value => onChange("SearchScreen")}>
                <Text>Click here to search</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={value => onChange("UserInputScreen")}>
                <Text>Click here to input room info and get plant recommendations</Text>
            </TouchableOpacity>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#006400',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
      width: '100%',
    }
});

export default HomeScreen;