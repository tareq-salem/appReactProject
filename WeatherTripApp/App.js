import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Menu from "./components/Menu";
import MeteoAPI from "./components/MeteoAPI";

export default class App extends React.Component {
    render() {
        return (
                <Menu/>
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
