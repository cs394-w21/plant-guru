import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Plant from './Plant';
import { windowWidth, windowHeight } from '../constants/WindowSize';


const PlantList = (props) => {
    const { query, plants, navigation, sunlight, size, pets, children, effort, temperature, humidity } = props;

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
        if(temperature==="any"){
            return true;
        }
        const currTempRange = plant.temperature.split('-');
        const currLowerRange = Number(currTempRange[0]);
        const currUpperRange = Number(currTempRange[1]);
        const tempRange = temperature.split('-');
        const lowerRange = Number(tempRange[0]);
        const upperRange = Number(tempRange[1]);
        return lowerRange <= currLowerRange && upperRange >= currUpperRange;
    };

    const checkHumidity = plant => {
        const currHumidityLowerCase = plant.humidity.toLowerCase();
        const humidityLowerCase = humidity.toLowerCase();
        if(humidityLowerCase === "any"){
            return true;
        }
        else if (currHumidityLowerCase.includes(humidityLowerCase) ) {
            return true;
        } else {
            return false;
        }
    };

    const checkEffort = plant => {
        const currEffortLowerCase = plant.care.toLowerCase();
        const effortLowerCase = effort.toLowerCase();
        if(effortLowerCase === "any"){
            return true;
        }
        else if (effortLowerCase === 'easy' && currEffortLowerCase.includes('low')) {
            return true;
        } else if (currEffortLowerCase.includes(effortLowerCase)) {
            return true;
        } else {
            return false;
        }
    }

    const checkSize = plant => {
        const currSizeLowerCase = plant.size.toLowerCase();
        const sizeLowerCase = size.toLowerCase();
        if(sizeLowerCase==="any"){
            return true;
        }
        else if(currSizeLowerCase.includes("feet")){
            let splitSize = currSizeLowerCase.split("feet");
            let splitH = splitSize[0].slice(-1).split("-");
            let maxHeight = splitH[1]
            if (sizeLowerCase === 'small' && Number(maxHeight)<6) {
                return true;
            } else if (sizeLowerCase == "medium" && (6 <= Number(maxHeight) < 15)) {
                return true;
            } else if (sizeLowerCase === 'large' && Number(maxHeight)>=15) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (currSizeLowerCase.includes("inches") && sizeLowerCase=="small"){
            return true;
        }
        else{
            return false;
        }
        
    }
    const checkToxic = plant => {
        const toxic = plant.allergies.toLowerCase();
        const children1 = children.toLowerCase();
        const pets1 = pets.toLowerCase();
        if (toxic == "none"){
            return true;
        }
        else if(children1==='any'&&pets1==='any'){
            return true;
        }
        else if (children1 == "yes" || pets1=="yes"){
            if (toxic.includes("poisonous")){
                return false;
            }
            else if (children1 == "yes" && toxic.includes("children")){
                return false;
            }
            else if (pets1 == "yes" && toxic.includes("pets")){
                return false;
            }
            else{
                return true;
            }
        }
        else{
            return true;
        }

    }

    const filterPlants = plant => {
        if (typeof query == 'undefined'){
            return checkSunlight(plant) && checkTemperature(plant) && checkHumidity(plant) && checkEffort(plant) && checkSize(plant) && checkToxic(plant);
        }
        else{
            return true;
        }
    };

    const filteredPlants = plants.filter(filterPlants);

    const filterQuerySearch = () => {
        return query ? filteredPlants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase())) : filteredPlants;
    };

    const filteredQuerySearchPlants = filterQuerySearch();

    return(
        <ScrollView contentContainerStyle={styles.plantList}>
            {filteredQuerySearchPlants.map(plant => (
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