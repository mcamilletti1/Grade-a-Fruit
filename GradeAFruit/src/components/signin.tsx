import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type SignInProps = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};



const SignInScreen: React.FC<SignInProps> = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('FruitGrader');
 }

  return (
    <View style={styles.container}>
      <Text style={styles.joinus}>Join Us!</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.solvehunger}>Help Solve Hunger</Text>
        <Text style={styles.getstarted}>Get started by creating your account</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Sign in With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Sign in With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Sign in With Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Sign in With Email</Text>
      </TouchableOpacity>
      <Text style={styles.account}>
        Already have an account? {' '}
        <TouchableOpacity onPress={onPressHandler}>
            <Text style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  joinus: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 40,
  },
  solvehunger: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
    paddingTop: 20,
    textAlign: 'center',
    paddingBottom: 40,
  },
  getstarted: {
    fontSize: 18,
    fontWeight: 'regular',
    color: 'dimgrey',
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    width: 250,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  account: {
    fontSize: 15,
    marginTop: 20,
  },
  signInLink: {
    color: 'blue',
    marginTop: 20,
  },
});

export default SignInScreen;