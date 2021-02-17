import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Plant from './Plant';
const PlantList = (props) => {
    const {plants} = props;
    
    return(
        <View style={styles.plantList}>
            {plants.map(plant => (
                <Plant plant={plant} key={plant.id}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    plantList: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      
});

export default PlantList