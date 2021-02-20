import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import {windowWidth} from '../constants/WindowSize';

const PlantInfoScreen = (props) => {
    const {route} = props;
    const plant = route.params.plant;
    const {name, image, sun, temperature, humidity, care, type, watering, size, allergies} = plant;

    return (
        <View style={styles.outerContainer}>
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <Text style={styles.text}>
                {`Sunlight needed: ${sun}`}
            </Text>
            <Text style={styles.text}>
                {`Optimal room temperature: ${temperature}`}
            </Text>
            <Text style={styles.text}>
                {`Optimal ambient humidity: ${humidity}`}
            </Text>
            <Text style={styles.text}>
                {`Care needed: ${care}`}
            </Text>
            <Text style={styles.text}>
                {`Plant type: ${type}`}
            </Text>
            <Text style={styles.text}>
                {`Watering needed: ${watering}`}
            </Text>
            <Text style={styles.text}>
                {`Plant size: ${size}`}
            </Text>
            <Text style={styles.text}>
                {`Plant toxicity: ${allergies}`}
            </Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#006400',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",

        borderRadius: 5,
        margin: 25,
        width: Math.min(500,0.9*windowWidth),
        //height: 300,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    image: {
        width: Math.min(480,0.85*windowWidth),
        height: Math.min(480,0.85*windowWidth)
    },
    text: {
        fontSize: 18,
        padding: 5
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        padding: 5
    }
});

export default PlantInfoScreen;
