import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import FavorisDetail from './FavorisDetail';

export default class FavorisList extends React.Component {

    static navigationOptions = {
        title: 'Favoris',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Voir les détails"}
                    onPress={() => {
                        this.props.navigation.navigate("FavorisDetail");
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
