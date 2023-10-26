import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type ProfileProps = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  };



const Profile: React.FC<ProfileProps> = ({ navigation }) => {

    const homeHandler = () => {
        navigation.navigate('Home');
     }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.settings} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2893/2893421.png" }}/>
                <Image style={styles.bell} source={{ uri: "https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png" }}/>
            </View>
            <Image style={styles.pfp} source={{ uri: "https://media.licdn.com/dms/image/D4E03AQErZLVbp1nrPg/profile-displayphoto-shrink_800_800/0/1685045057560?e=2147483647&v=beta&t=_5vYAiUsvpXqcuCfGajlSBeSc7qW_55XeLnQDc6tOes" }}/>
            <Text style={styles.email}>mhcamilletti@gmail.com</Text>
            <Text style={styles.bio}>Hi there! My name is Margaret Camilletti and I am a full-stack software developer based in Manhattan, New York. </Text>
            <View style={styles.info}>
                <View style={styles.location}>
                    <Image style={styles.mappin} source={{ uri: "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-512.png" }} />
                    <TouchableOpacity>
                        <Text style={styles.heading}>LOCATION</Text>
                        <Text style={styles.subheading}>New York</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.time}>
                    <Image style={styles.clock} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2725/2725210.png" }}/>
                    <TouchableOpacity>
                        <Text style={styles.heading}>LOCAL TIME</Text>
                        <Text style={styles.subheading}>8:15 AM</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.agenda}>
                    <Image style={styles.calender} source={{ uri: "https://icones.pro/wp-content/uploads/2022/08/icone-du-calendrier-des-evenements-gris.png" }}/>
                    <TouchableOpacity>
                        <Text style={styles.heading}>AGENDA</Text>
                        <Text style={styles.subheading}>Next Meeting in 15min</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={homeHandler}>
                    <Image style={styles.house} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Home_icon_grey.png"}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settings: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    bell: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    pfp: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    mappin: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    info: {
        width: '70%',
    },
    bio: {
        width: '70%',
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    agenda: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    heading: {
        fontWeight: 'bold',
    },
    clock: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    calender: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    house: {
        width: 50,
        height: 50,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 20,
    },
});

export default Profile;