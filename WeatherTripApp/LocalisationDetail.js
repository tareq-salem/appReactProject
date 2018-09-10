import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationResult from './LocalisationResult';

export default class LocalisationDetail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LOCALISATION DETAIL</Text>
                <Button
                    title={"Retour"}
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
