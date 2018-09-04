import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class TextInput extends React.Component {
    constructor() {
        super();
        this.state = {
            saisie: "Saisir un texte..."
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{
                    height: 20,
                    width: 200,
                    borderWidth: 1}}
                           value={this.state.saisie}
                           onChangeText=
                               {(text) => {this.setState({
                                   saisie: text
                               })
                               }}
                />

                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
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

