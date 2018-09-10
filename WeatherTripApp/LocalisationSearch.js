import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationResult from './LocalisationResult';

export default class LocalisationSearch extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LOCALISATION SEARCH</Text>
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
