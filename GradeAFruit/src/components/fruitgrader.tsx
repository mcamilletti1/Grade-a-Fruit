import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FruitGrader: React.FC = () => {
  
 return (
    <View style={styles.container}>
      <Text style={styles.fruitgrader}>Fruit Grader</Text>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fruitgrader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 40,
  },
});
  
export default FruitGrader;