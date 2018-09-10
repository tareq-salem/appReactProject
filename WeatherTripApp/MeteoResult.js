import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import MeteoDetail from './MeteoDetail';

export default class MeteoResult extends React.Component {

    static navigationOptions = {
        title: 'Résultats',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Afficher les détails"}
                    onPress={() => {
                        this.props.navigation.navigate("MeteoDetail");
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
