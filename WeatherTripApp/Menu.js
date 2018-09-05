import React from 'react';
import {StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import MeteoScreen from "./MeteoScreen";
import LocalisationScreen from "./LocalisationScreen";
import FavorisScreen from "./FavorisScreen";

export default class Menu extends React.Component {
    render() {
        const MenuScreen = createMaterialBottomTabNavigator({
            Meteo: {
                screen: MeteoScreen
            },
            Localisation: {
                screen: LocalisationScreen
            },
            Favoris: {
                screen: FavorisScreen
            }},
            {
                activeTintColor: '#ffffff',
                barStyle: {backgroundColor: '#23a844'}
    });

        return (
            <MenuScreen />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

