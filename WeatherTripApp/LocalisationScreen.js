import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation';

export default class LocalisationScreen extends React.Component {
    render() {
        return (
            <Text>LOCALISATION</Text>
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


