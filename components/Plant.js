import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {windowWidth} from '../constants/WindowSize';

const Plant = (props) => {
    const {plant, navigation} = props;

    const handlePress = () => {
        navigation.navigate('PlantInfoScreen', {plant});
    }

    return(
        <TouchableOpacity style={styles.container} onPress={handlePress}>
                <Text style={styles.name}>{plant.name}</Text>
                <View style={styles.shadowContainer}>
                <Image style={styles.iconBorder} source={{uri: plant.image}} />
                </View>
                
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
        borderRadius: 5,
        minWidth: windowWidth*0.45,
        maxWidth: windowWidth*0.45,
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: windowWidth*0.1,
        flexWrap: 'wrap',
        textAlignVertical: 'center',
        paddingLeft: windowWidth*0.05
    },
    shadowContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 13,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        alignItems: 'center',
        width: '90%'
    },
    image: {
        width: '90%',
        height: '100%'
    },
    text: {
        fontSize: 12,
        padding: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7EA480',
        maxWidth: '100%',
        textAlign: 'center',
        paddingBottom: 3
    },
    iconBorder: {
        borderColor: '#7EA480',
        borderWidth: 3,
        borderRadius: Math.min(250*0.23, windowWidth*0.3*0.23),
        width: Math.min(windowWidth*0.3, 250),
        height: Math.min(windowWidth*0.3, 250),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: windowWidth*0.05,
        marginRight: windowWidth*0.05,
    }
});

export default Plant;

