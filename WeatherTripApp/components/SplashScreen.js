import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import FadeInView from './FadeInView';



export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'green'}}>
                <View style={{alignItems: 'center'}}>
                    <FadeInView>
                        <Text style={{ color: 'white', fontSize: 18 }}></Text>
                        <Image source={require('../img/weather.png')} resizeMode='contain'/>
                    </FadeInView>
                </View>
            </View>
        );
    }
}
