import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default class FlatList extends React.Component {

    render() {
        const arr = [1,2,3,4,5];
        const arr2 = [9,8,7,6,5];

        const elemnts = arr2.map((item) => {
            return <Text>{item}</Text>
        });

        return (
            <View style={styles.container}>
                {elements}

                <FlatList
                data={arr}
                renderItem={({item}) => {
                    return (
                        <Text>{item}</Text>
                    )}}
            />
{/*                <FlatList
                    data={arr}
                    renderItem={(param) => {
                        return (
                            <Text>{param.item}</Text>
                        )}}
                />*/}
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

