import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { windowWidth } from '../../constants/WindowSize';

const IntroScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.regularText}>
                Let us help you find the perfect plant for your home.
            </Text>
            <Text style={styles.regularText}>
                Answering the following 7 questions will help us provide plant recommendations specific to you!
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SunlightScreen')}
                style={styles.nextButton}
            >
                <Text style={styles.nextButtonText}>
                    Let's Begin
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const text = {
    color: '#7EA480',
    fontFamily: 'Rubik',
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: -0.28,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F3',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    nextButton: {
        backgroundColor: '#7ea480',
        borderColor: '#7EA480',
        borderWidth: 3,
        borderRadius: Math.min(100*0.23, windowWidth*0.2*0.23),
        width: Math.min(200, windowWidth*0.2),
        height: Math.min(50, windowWidth*0.1),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Math.min(20, windowWidth*0.01)
    },
    nextButtonText: {
        ...text,
        color: '#ecf0f3',
    },
    regularText: {
        ...text,
        color: '#7ea480',
    },
});

export default IntroScreen;
