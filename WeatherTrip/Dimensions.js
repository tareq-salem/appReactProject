import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';

export default class TouchableWithoutFeedback extends React.Component {
    render() {
        const dim = Dimensions.get("window");
        return (
            <View style={styles.container}>
                <button title={"open"} onPress={() => {}}/>
                <Text>{dim.width}</Text>
                <Text>{dim.heigth}</Text>
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


