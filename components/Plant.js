import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {windowWidth} from '../constants/WindowSize';

const Plant = (props) => {
    const {plant, navigation} = props;

    const handlePress = () => {
        console.log("success");
        navigation.navigate('PlantInfoScreen', {plant});
    }
    console.log(plant.image)

    return(
        <TouchableOpacity onPress={handlePress}>
            {/* <View style={styles.container}> */}
                <Image style={styles.iconBorder} source={{uri: plant.image}} />
                {/* <Text style={styles.name}>{plant.name}</Text> */}
            {/* </View> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
        minWidth: '28%',
        maxWidth: '28%',
        // minHeight: 100,
        // maxHeight: 100,
        height: 0.28*windowWidth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 5,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 12,
        padding: 2
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        padding: 5
    },
    iconBorder: {
        borderColor: '#7EA480',
        borderWidth: 3,
        borderRadius: Math.min(250*0.23, windowWidth*0.3*0.23),
        width: Math.min(windowWidth*0.3, 250),
        height: Math.min(windowWidth*0.3, 250),
        alignItems: 'center',
        justifyContent: 'center',
        margin: Math.min(20, windowWidth*0.1)

    }
});

export default Plant;

