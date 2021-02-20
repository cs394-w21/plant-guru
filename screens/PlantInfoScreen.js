import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


const PlantInfoScreen = (props) => {
    const {route} = props;
    const plant = route.params.plant;
    const {name, image, sun, temperature, humidity, care, type, watering, size, allergies} = plant;

    return (
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        borderRadius: 5,
        margin: 25,
        width: 250,
        marginTop: 1,
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
        width: 220,
        height: 200
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
    }
});

export default PlantInfoScreen;
