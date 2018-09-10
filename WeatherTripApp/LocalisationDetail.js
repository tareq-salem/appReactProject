import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationResult from './LocalisationResult';

export default class LocalisationDetail extends React.Component {

    static navigationOptions = {
        title: 'Détails',
    };

    render() {
        return (
            <View style={styles.container}>
            </View>
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
