import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { Card, ListItem, Button, Icon } from 'react-native-elements'

const PlantList = (props) => {
    const {plants} = props;

    return(
        <View style={styles.plantList}>
            {plants.map(plant => (
                <TouchableOpacity>{plant.name}</TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    plantList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }    
});

export default PlantList