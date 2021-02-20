import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {windowWidth,windowHeight} from '../constants/WindowSize.js';

const Plant = (props) => {
    const {plant, navigation} = props;
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        setExpanded(!expanded);
        console.log("success");
        navigation.navigate('PlantInfoScreen');
    }
    console.log(plant.image)

    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: plant.image}} />
                <Text style={styles.name}>{plant.name}</Text>
                <Text style={styles.text}>{expanded? `Care: Requires ${plant.care} care` : ''}</Text>
                <Text style={styles.text}>{expanded? `Sunlight: Requires ${plant.sunlight} amount` : ''}</Text>
                <Text style={styles.text}>{expanded? `Watering: ${plant.water}` : ''}</Text>
                <Text style={styles.text}>{expanded? `Toxicity: ${plant.toxicity}` : ''}</Text>
            </View>
        </TouchableOpacity>
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

export default Plant;

