import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import PlantList from '../components/PlantList';
import getPlantData from '../utils/plantData';

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
      backgroundColor: '#006400',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
      width: '100%',
    }
});

export default SearchScreen;