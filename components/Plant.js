import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Plant = (props) => {
    const {plant, navigation} = props;

    const handlePress = () => {
        console.log("success");
        navigation.navigate('PlantInfoScreen', {plant});
    }
    console.log(plant.image)

    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: plant.image}} />
                <Text style={styles.name}>{plant.name}</Text>
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

