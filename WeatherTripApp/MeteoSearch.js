import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import MeteoResult from './MeteoResult';
import MeteoAPI from './components/MeteoAPI'
import {haveInternetConnection} from './components/haveInternetConnection';

export default class MeteoSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            errorMessage: "",
        }
    }

    static navigationOptions = {
        title: 'Météo',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 50, marginBottom: 10,}}>
                    <Text>Tapez le nom d'une ville ou un code postal</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                    <TextInput
                        style={styles.textInput}
                        autoCorrect={false}
                        placeholder={"ex. Paris, Marseille, 69000,..."}
                        underlineColorAndroid={'transparent'}
                        value={this.state.inputValue}
                        onChangeText={(text) => this.setState({inputValue: text,})}
                        >
                        </TextInput>
                        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                    </View>
                    <View style={{flex: 8, justifyContent: 'flex-start', marginTop: 40}}>
                        <Button
                            title={"Rechercher"}
                            onPress={() => {
                                if (this.state.inputValue.length < 3) {
                                    this.setState({
                                        errorMessage: "Veuillez écrire au moins 3 caractères",
                                    })
                                } else {
                                    this.setState({
                                        errorMessage: "",
                                    })
                                    MeteoAPI.APIrequest(this.state.inputValue);
                                    this.props.navigation.navigate("MeteoResult");
                                }
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
        errorMessage: {
            marginTop: 10,
            alignItems: 'center',
            color: 'red',
        },
    });
