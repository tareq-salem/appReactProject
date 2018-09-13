import React from 'react';
import {StyleSheet, View} from 'react-native';
import Menu from "./components/Menu";
import MeteoAPI from "./components/MeteoAPI";
import SplashScreen from './components/SplashScreen';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <SplashScreen/> */}
                <Menu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
