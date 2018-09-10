import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationResult from './LocalisationResult';

export default class LocalisationSearch extends React.Component {

    static navigationOptions = {
        title: 'WeatherTrip',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Rechercher"}
                    onPress={() => {
                        this.props.navigation.navigate("LocalisationResult");
                    }}
                />
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
