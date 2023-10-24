import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FruitGrader: React.FC = () => {
  
 return (
    <View style={styles.container}>
      <Text style={styles.fruitgrader}>Fruit Grader</Text>
      <Text style={styles.clickorgrade}>Click or Grade?</Text>
      <Image style={styles.camera} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp7w7sbMWkAEKdiOa1dzitpk8kKGCTiKbJG3iGn6NFr-H7raI4_M4n0RIto-EEd5pHdM&usqp=CAU" }}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START CLICKING</Text>
      </TouchableOpacity>
      <Image style={styles.glass} source={{ uri: "https://cdn4.iconfinder.com/data/icons/commenly-needed/400/Icon-12-512.png" }}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START GRADING</Text>
      </TouchableOpacity>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  fruitgrader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  clickorgrade: {
    fontSize: 20,
  },
  camera: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'silver',
    padding: 7,
    borderRadius: 3,
    paddingRight: 30,
    paddingLeft: 30,
  },
  glass: {
    width: 130,
    height: 130,
    marginTop: 40,
    marginBottom: 30,
  },
});
  
export default FruitGrader;