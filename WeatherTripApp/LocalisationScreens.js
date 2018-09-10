import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import LocalisationSearch from './LocalisationSearch';
import LocalisationResult from './LocalisationResult';
import LocalisationDetail from './LocalisationDetail';

export class LocalisationScreen extends React.Component {
    render() {
        const LocalisationStack = createStackNavigator({
    LocalisationSearch: {
        screen: LocalisationSearch
    },
    LocalisationResult: {
        screen: LocalisationResult
    },
    LocalisationDetail: {
        screen: LocalisationDetail
    }
});
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
