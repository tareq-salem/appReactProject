import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationSearch from './LocalisationSearch';
import LocalisationDetail from './LocalisationDetail';

export default class LocalisationResult extends React.Component {

    static navigationOptions = {
        title: 'Résultats',
    };

    render() {
        return (
            <View style={styles.container}>
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
