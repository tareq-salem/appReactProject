import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

export default class WebView extends React.Component {

    render() {

        return (
        <View style={styles.container}>
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
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

