import React from 'react';
import { TextInput, View } from 'react-native';


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
            style={{backgroundColor: '#333333', color: 'white', height: 20, width: '70%'}}
        />
    );
};

export default SearchBar;
