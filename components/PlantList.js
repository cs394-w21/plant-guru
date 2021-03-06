import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { windowWidth } from '../constants/WindowSize';
import Plant from './Plant';


const PlantList = (props) => {
    const { query, plants, navigation, sunlight, size, pets, children, effort, temperature, humidity } = props;
    const [finalPlants, setFinalPlants] = useState();

    const checkSunlight = plant => {
        const currSunlightLowerCase = plant.sun.toLowerCase();
        const sunlightLowerCase = sunlight.toLowerCase();
        if (sunlightLowerCase == 'any') {
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
        if (temperature == "Any") {
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
        if (humidityLowerCase == "any") {
            return true;
        }
        else if (currHumidityLowerCase.includes(humidityLowerCase)) {
            return true;
        } else {
            return false;
        }
    };

    const checkEffort = plant => {
        const currEffortLowerCase = plant.care.toLowerCase();
        const effortLowerCase = effort.toLowerCase();
        if (effortLowerCase == "any") {
            return true;
        }
        else if (currEffortLowerCase.includes(effortLowerCase)) {
            return true;
        } else {
            return false;
        }
    }

    const checkSize = plant => {
        const currSizeLowerCase = plant.size.toLowerCase();
        if (size.includes('Any')) {
            return true;
        } else if (currSizeLowerCase.includes("feet")) {
            let splitSize = currSizeLowerCase.split("feet");
            let splitH = splitSize[0].slice(-1).split("-");
            let maxHeight = splitH[1]
            if (size.includes('Small') && Number(maxHeight) < 1) {
                return true;
            } else if (size.includes('Medium') && (1 <= Number(maxHeight) <= 2)) {
                return true;
            } else if (size.includes('Large') && Number(maxHeight) > 2) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (currSizeLowerCase.includes("inches") && size.includes('Small')) {
            return true;
        } else {
            return false;
        }
    }

    const checkToxic = plant => {
        const toxic = plant.allergies.toLowerCase();
        const children1 = children.toLowerCase();
        const pets1 = pets.toLowerCase();
        if (toxic == "none") {
            return true;
        }
        else if (children1 == 'any' && pets1 == 'any') {
            return true;
        }
        else if (children1 == "yes" || pets1 == "yes") {
            if (toxic.includes("poisonous")) {
                return false;
            }
            else if (children1 == "yes" && toxic.includes("children")) {
                return false;
            }
            else if (pets1 == "yes" && toxic.includes("pets")) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }

    }

    const filterPlants = plant => {
        if (typeof query == 'undefined') {
            return checkSunlight(plant) && checkTemperature(plant) && checkHumidity(plant) && checkEffort(plant) && checkSize(plant) && checkToxic(plant);
        }
        else {
            return true;
        }
    };

    const filteredPlants = plants.filter(filterPlants);

    useEffect(() => {
        const filterQuerySearch = () => {
            return (
                query
                    ?
                    setFinalPlants(filteredPlants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase())))
                    :
                    setFinalPlants(filteredPlants)
            );
        };

        filterQuerySearch();
    }, [plants, query]);

    return (
        <>
            <Text style={styles.text}>Tap plant card to view details</Text>
            {
                plants.length !== 0
                    ?
                    finalPlants.length !== 0
                        ?
                        finalPlants.map(plant => (
                            <Plant plant={plant} key={plant.id} navigation={navigation} />
                        ))
                        :
                        <Text style={styles.mainText}>
                            There are no plants that match your criteria.
                    </Text>
                    :
                    <Text style={styles.mainText}>
                        Loading...
                </Text>
            }
        </>
    );
};

const styles = StyleSheet.create({
    plantList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: windowWidth * 0.9,
    },
    text: {
        color: '#7EA480',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: windowWidth * 0.03
    },
    mainText: {
        color: '#7EA480',
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        padding: windowWidth * 0.1
    }
});

export default PlantList
