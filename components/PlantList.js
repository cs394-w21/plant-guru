import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Plant from './Plant';
import { windowWidth, windowHeight } from '../constants/WindowSize';


const PlantList = (props) => {
    const { plants, navigation, sunlight, allergies, size, pets, children, effort, temperature, humidity } = props;

    const checkSunlight = plant => {
        const currSunlightLowerCase = plant.sun.toLowerCase();
        const sunlightLowerCase = sunlight.toLowerCase();
        if (sunlightLowerCase === 'any') {
            return true;
        } else if (sunlightLowerCase === 'high' && currSunlightLowerCase.includes('bright')) {
            return true;
        } else if (currSunlightLowerCase.includes(sunlightLowerCase)) {
            return true;
        } else {
            return false;
        }
    };

    const checkTemperature = plant => {
        const tempRange = plant.temperature.split('-');
        const lowerRange = Number(tempRange[0]);
        const upperRange = Number(tempRange[1]);
        return lowerRange <= temperature && upperRange >= temperature;
    };

    const checkHumidity = plant => {
        const currHumidityLowerCase = plant.humidity.toLowerCase();
        if (currHumidityLowerCase.includes('low') && humidity <= 20) {
            return true;
        } else if (currHumidityLowerCase.includes('medium') && humidity > 20 && humidity <= 40) {
            return true;
        } else if (currHumidityLowerCase.includes('high') && humidity > 40) {
            return true;
        } else {
            return false;
        }
    };

    const filterPlants = plant => {
        return checkSunlight(plant) && checkTemperature(plant) && checkHumidity(plant);
    };

    const filteredPlants = plants.filter(filterPlants);

    return(
        <ScrollView contentContainerStyle={styles.plantList}>
            {filteredPlants.map(plant => (
                <Plant plant={plant} key={plant.id} navigation={navigation}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    plantList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight,
    },
});

export default PlantList