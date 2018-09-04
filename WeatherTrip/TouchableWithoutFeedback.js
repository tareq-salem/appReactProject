import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

export default class TouchableWithoutFeedback extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback title={"open"} onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
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

