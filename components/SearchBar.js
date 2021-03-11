import React from 'react';
import { TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { windowWidth } from '../constants/WindowSize';


const SearchBar = (props) => {
    const { query, setQuery } = props;

    const handleOnChangeText = queryText => {
        setQuery(queryText);
    };

    return (
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            clearButtonMode='always'
            value={query}
            onChangeText={queryText => handleOnChangeText(queryText)}
            placeholder='Search plant name...'
            style={styles.searchBar}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        borderColor: '#7EA480',
        borderWidth: 3,
        width: windowWidth*0.8,
        height: windowWidth*0.15,
        color: '#7EA480'
    },
    
  });

export default SearchBar;
