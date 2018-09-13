import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';



export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
                <Text style={{ color: 'white', fontSize: 18 }}>WeatherTrip</Text>
                <Image source={require('../img/weather.png')} resizeMode='contain'/>
            </View>
        );
    }
}
