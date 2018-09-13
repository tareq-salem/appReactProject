import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LocalisationSearch from './LocalisationSearch';
import LocalisationDetail from './LocalisationDetail';
import { MapView } from 'expo';

export default class LocalisationResult extends React.Component {

    static navigationOptions = {
        title: 'Résultats',
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1,}}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <Button
                    title={"Détail"}
                    onPress={() => {
                        this.props.navigation.navigate("LocalisationDetail");
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
