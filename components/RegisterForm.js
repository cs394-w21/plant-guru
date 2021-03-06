import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { db, firebase } from '../utils/firebase.js';
import Form from './Form.js';

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter a valid email')
      .email()
      .label('Email'),
    password: Yup.string()
      .required()
      .min(6, 'Password must have at least 6 characters')
      .label('Password'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
  });

  const newUserProps = {
    favorites: {},
    owned: {},
    role: "user",
  };

  const RegisterForm = ({ navigation }) => {
    const [signInError, setSignInError] = useState('');
    const [showConfirm, setShowConfirm] = useState(false);

    async function handleOnLogin(values) {
        const { email, password } = values;
        setSignInError(null);
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          navigation.navigate('HomeScreen');
        } catch (error) {
          setSignInError(error.message);
        }
    }

    async function handleOnSignUp(values) {
      //setShowConfirm(true);
      //console.log(showConfirm);
      const { name, email, password } = values;
      setSignInError(null);
      try {
        const authCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        db.ref("users").child(authCredential.user.uid).set(newUserProps);
        const user = authCredential.user;
        await user.updateProfile({displayName: name});
        navigation.navigate('HomeScreen');
      } catch (error) {
        setSignInError(error.message);
      }
    }

    async function handleOnSubmit(values) {
      return showConfirm ? handleOnSignUp(values) : handleOnLogin(values);
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Form
            initialValues={{
              email: '',
              password: '',
              confirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            <Form.Field
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Form.Field
              name="password"
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            {showConfirm ? <Form.Field
              name="confirm"
              leftIcon="lock"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />: <Text></Text>}
            <View style={styles.buttons}>
              <Form.Button title={showConfirm ? 'sign up' : 'login'}/>
              <TouchableOpacity
                onPress={() => setShowConfirm(!(showConfirm))}
                style={styles.button}
              >
                <Text style={{ color: '#7EA480', fontSize: 18 }}>{showConfirm ? 'login' : 'sign up'}</Text>
              </TouchableOpacity>
            </View>
            {<Form.ErrorMessage error={signInError} visible={true} />}
          </Form>
          {/* <TouchableOpacity
            onPress={() => setShowConfirm(!(showConfirm))}
          >
            <Text style={{textDecorationLine:"underline"}}>{showConfirm ? 'login' : 'sign up'}</Text>
          </TouchableOpacity> */}
        </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ecf0f3',
      borderColor: '#7EA480',
      borderWidth: 3,
      marginVertical: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: 130,
      height: 60,
      margin: 5,
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      top: 400,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#ECF0F3'
    },
});
  
export default RegisterForm;
