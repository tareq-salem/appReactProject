import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationSearch from './LocalisationSearch';
import LocalisationDetail from './LocalisationDetail';

export default class LocalisationResult extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LOCALISATION RESULT</Text>
                <Button
                    title={"Retour"}
                    onPress={() => {
                        this.props.navigation.navigate("LocalisationSearch");
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
