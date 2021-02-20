import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Plant from './Plant';
import { windowWidth, windowHeight } from '../constants/WindowSize';


const PlantList = (props) => {
    const {plants, navigation} = props;

    return(
        <ScrollView contentContainerStyle={styles.plantList}>
            {plants.map(plant => (
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
        borderWidth: 5,
        borderColor: 'red',
        width: windowWidth,
        height: windowHeight,
    },
});

export default PlantList