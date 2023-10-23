import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SignInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;