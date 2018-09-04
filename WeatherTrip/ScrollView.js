import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

export default class ScrollView extends React.Component {
    constructor() {
        super();
        this.state = {
            saisie: "Saisir un texte..."
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>
                <Button title={"go"} onPress={() => {
                    alert(this.state.saisie);
                }}/>

            </ScrollView>
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

