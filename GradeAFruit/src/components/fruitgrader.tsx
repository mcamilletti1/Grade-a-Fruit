import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type FruitGraderProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const FruitGrader: React.FC<FruitGraderProps> = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('Home');
 }

 const profileHandler = () => {
  navigation.navigate('Profile')
 }
  
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
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPressHandler}>
          <Image style={styles.home} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Home_icon_grey.png" }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={profileHandler}>
          <Image style={styles.profile} source={{ uri: "https://i2.wp.com/umaine.edu/citl/wp-content/uploads/sites/266/2022/09/gendernetural_icon.jpg?fit=272%2C272&ssl=1" }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.settings} source={{ uri: "https://static-00.iconduck.com/assets.00/gear-settings-icon-512x510-emfroqvl.png" }}/>
        </TouchableOpacity>
      </View>
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
  home: {
    width: 50,
    height: 50,
  },
  profile: {
    width: 40,
    height: 40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    borderTopWidth: 1,
    paddingTop: 2,
    borderTopColor: 'silver',
  },
  settings: {
    width: 40,
    height: 40,
  },
});
  
export default FruitGrader;