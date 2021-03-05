import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import PlantList from '../components/PlantList';
import getPlantData from '../utils/plantData';
import { windowWidth, windowHeight } from '../constants/WindowSize';

const SearchScreen = (props) => {
    const { navigation } = props;
    const plants = getPlantData();
    const [query, setQuery] = useState('');
    return(
        <SafeAreaView style={styles.container}>
            <SearchBar query={query} setQuery={setQuery}/>
            <PlantList
            query={query}
            plants={plants}
            navigation={navigation}
          />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ECF0F3',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%', 
    }
});

export default SearchScreen;