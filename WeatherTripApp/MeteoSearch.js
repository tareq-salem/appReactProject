import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import MeteoResult from './MeteoResult';

export default class MeteoSearch extends React.Component {

        static navigationOptions = {
            title: 'Météo',
        };

            render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Rechercher"}
                    onPress={() => {
                        this.props.navigation.navigate("MeteoResult");
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
