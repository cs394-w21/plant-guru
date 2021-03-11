import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import Colors from './colors';

export default function FormButton({ title, color = 'primary' }) {
  const { handleSubmit, values } = useFormikContext();
  const text = typeof title === 'function' ? title(values) : title;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7EA480',
    marginVertical: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: 130,
    height: 60,
    margin: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    // textTransform: 'uppercase'
  }
});
