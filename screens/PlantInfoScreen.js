import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import {windowWidth} from '../constants/WindowSize';
import fetchUserData from '../utils/fetchData';
import writeUserData from '../utils/writeData';
const checkFavorite = (plantID, userData) => {
    if (!userData || !("favorites" in userData)){
        return false;
    }
    return userData.favorites.includes(plantID);
}; 
const addFavorite = (userID,userData,plantID) => {
    if (!("favorites" in userData)){
        userData.favorites = [plantID];
    }
    else {
        if (userData.favorites.includes(plantID)){
            userData.favorites = userData.favorites.filter(favorite => favorite!=plantID);
        }
        else{
            userData.favorites.push(plantID);
        }
    }
    writeUserData(userID, userData);
}
const PlantInfoScreen = (props) => {
    const userID = 'gzWp1lAOLEfpsUHCuRwuH30Ap0R2' //TODO: change this
    const {route} = props;
    const plant = route.params.plant;
    const {name, image, sun, temperature, humidity, care, type, watering, size, allergies} = plant;
    const {loading, user} = fetchUserData(userID);
    if (loading) {
        return <Text>Loading...</Text>
    }
    else{
        return (
            <View style={styles.outerContainer}>
            <View style={styles.iconBorder}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <TouchableOpacity onPress={() => addFavorite(userID, user, plant.id)}
                                  style={checkFavorite(plant.id,user) ? styles.favoriteSelected : styles.favorite}>
                    <Text style={checkFavorite(plant.id,user) ? styles.favoriteSelectedText : styles.favoriteText}>{checkFavorite(plant.id,user) ? 'Unfavorite' : 'Favorite'}</Text>
                </TouchableOpacity>
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
    
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#ECF0F3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    iconBorder: {
        borderColor: '#7EA480',
        borderWidth: 3,
        borderRadius: Math.min(200*0.23, windowWidth*0.3*0.23),
        width: Math.min(windowWidth*0.5, 600),
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    favorite: {
        borderWidth: 2,
        borderRadius: 10
    },
    favoriteSelected: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'red'
    },
    favoriteText: {
        color: 'black'
    },
    favoriteSelectedText: {
        color: 'red'
    },
});

export default PlantInfoScreen;
