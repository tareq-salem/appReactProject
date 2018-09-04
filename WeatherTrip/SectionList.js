import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';

export default class TextInput extends React.Component {

    render() {
        const arr = [1,2,3,4,5];
        const arr2 = [9,8,7,6,5];

        const elemnts = arr2.map((item) => {
            return <Text>{item}</Text>
        });

        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'A', data: ['Albert', 'Alfred']},
                        {title: 'B', data: ['Bernard', 'Bob']},
                        {title: 'C', data: ['Claire', 'Catherine']},
                    ]}
                    keyExtractor={(item, index) => item + index}
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

