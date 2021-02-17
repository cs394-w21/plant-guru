import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {windowWidth,windowHeight} from '../constants/WindowSize.js';

const Plant = (props) => {
    const {plant} = props;
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => {
        setExpanded(!expanded);
        console.log("success");
    }
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text>{plant.name}</Text>
                <Text>{expanded && plant.light}</Text>
            </View>

        </TouchableOpacity>
    )
}
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
    }   
});
export default Plant;

