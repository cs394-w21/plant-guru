import React, {useContext} from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {windowWidth,windowHeight} from '../constants/WindowSize';
import fetchUserData from '../utils/fetchData';
import writeUserData from '../utils/writeData';
import UserContext from '../contexts/UserContext';
import RegisterScreen from './RegisterScreen';


const checkFavorite = (plantID, userData) => {
    if (!userData || !("favorites" in userData)){
        return false;
    }
    return userData.favorites.includes(plantID);
}; 
const addFavorite = (user,userData,plantID, navigation) => {
    if((user) && (userData != null)){
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
        writeUserData(user.uid, userData);
    }
    else{
        navigation.navigate('RegisterScreen');
    }
    
}
const PlantInfoScreen = (props) => {
    const {route, navigation} = props;
    const plant = route.params.plant;
    const {name, image, sun, temperature, humidity, care, type, watering, size, allergies} = plant;
    const user = useContext(UserContext);
    const {loading, userData} = (user && user.uid)? fetchUserData(user.uid) : {loading: false, userData: null};
    if (loading) {
        return <Text>Loading...</Text>
    }
    else{
        return (
            <ScrollView contentContainerStyle={styles.outerContainer}>
                <Text style={styles.name}>
                        {name}
                    </Text>

                <View style={styles.dropshadow}>
                    <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                </View>
                <View style={styles.iconBorder}>
                    

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
                <TouchableOpacity onPress={() => addFavorite(user, userData, plant.id, navigation)}
                        style={checkFavorite(plant.id, user) ? styles.favoriteSelected : styles.favorite}>
                        <Text style={checkFavorite(plant.id, user) ? styles.favoriteSelectedText : styles.favoriteText}>{checkFavorite(plant.id, user) ? 'Remove Favorite' : 'Add Favorite'}</Text>
                    </TouchableOpacity>
            </ScrollView>
        );
    };
    
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#ECF0F3',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: windowWidth,
        height: windowHeight,
    },
    iconBorder: {
        borderColor: 'black',
        borderWidth: 2,
        //borderRadius: Math.min(200*0.23, windowWidth*0.3*0.23),
        borderRadius: 15,
        width: Math.min(windowWidth*0.85, 600),
        alignItems: "",
        justifyContent: 'center',
        marginTop: 10,
        marginBottom:20,
        padding:5
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",

        borderRadius: 5,
        margin: 15,
        width: Math.max(500,0.85*windowWidth),
        //height: 300,
        marginTop: 50,
        
        padding: 15,
        alignItems: 'center',
    },
    image: {
        width: Math.min(480,0.7*windowWidth),
        height: Math.min(480,0.7*windowWidth),
        borderColor: '#7EA480',
        borderWidth: 3,
        borderRadius: 20,
        
        
    },
    dropshadow:{ 
        width: Math.min(480,0.7*windowWidth),
        height: Math.min(480,0.7*windowWidth),
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 13,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginBottom:15,
    },
    text: {
        fontSize: 15,
        padding: 3
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        padding: 5,
        paddingTop:0,
        color:"#7EA480"
    },
    favorite: {
       
        borderRadius: 25,

        padding: 15,
        borderColor: '#7EA480',
        borderWidth: 3,
        width: 185,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    favoriteSelected: {
        borderRadius: 25,
        padding: 15,
        borderColor: 'red',
        borderWidth: 3,
        width: 185,
        alignItems: 'center',
        justifyContent:'center',
        height: 55
    },
    favoriteText: {
        color: '#7EA480'
    },
    favoriteSelectedText: {
        color: 'red'
    },
});

export default PlantInfoScreen;

