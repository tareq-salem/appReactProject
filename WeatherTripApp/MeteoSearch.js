import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import MeteoResult from './MeteoResult';
import MeteoAPI from './components/MeteoAPI';

export default class MeteoSearch extends React.Component {

    static navigationOptions = {
        title: 'Météo',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 50, marginBottom: 10,}}>
                    <Text>Tapez le nom d'une ville ou un code postal</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start', marginBottom: 10}}>
                    <TextInput
                        style={styles.textInput}
                        autoCorrect={false}
                        placeholder={"ex. Paris, Rome, 69000,..."}
                        underlineColorAndroid={'transparent'}
                        >
                    </TextInput>
                </View>
                <View style={{flex: 8}}>
                    <Button
                        title={"Rechercher"}
                        onPress={() => {
                            MeteoAPI.APIrequest('Paris');
                            //this.props.navigation.navigate("MeteoResult");
                        }}
                        color={'#23a844'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textInput: {
        height: 25,
        width: 250,
        borderWidth: 1,
        textAlignVertical: 'center',
        paddingLeft: 10,
    },
});
