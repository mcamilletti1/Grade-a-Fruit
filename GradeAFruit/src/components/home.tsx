import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type HomeProps = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const onPressHandler = () => {
     navigation.navigate('SignInScreen');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" }}/>
      <Text style={styles.title}>Grade a Fruit</Text>
      <Text style={styles.subtitle}>Good or Bad?</Text>
      <Text style={styles.subtitle2}>Fruit Grader</Text>
      <Text style={styles.paragraph}>An App for anyone to help save food by training robots to more accurately differentiate between Good and Bad fruits and vegetables.</Text>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 300,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 50,
  },
  subtitle2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'regular',
    color: 'dimgray',
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    width: 250,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Home;