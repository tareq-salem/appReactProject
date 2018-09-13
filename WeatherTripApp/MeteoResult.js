import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';

import MeteoDetail from './MeteoDetail';
import moment from 'moment';
import 'moment/locale/fr';

export default class MeteoResult extends React.Component {
    constructor() {
        super();
        // moment.locale('fr');
    }

    static navigationOptions = {
        title: 'Résultats',
    };



    renderItem(item) {

        let nowDay = moment().format('D');
        let meteoDay = moment(item.item.dt_txt).format('D');

        if (item.item.dt_txt.substring(11, 13) == 12) {
            let day = moment(item.item.dt_txt).format('dddd');
            let formatDay = day.charAt(0).toUpperCase() + day.substring(1).toLowerCase();

            return (
                <View>
                    <View style={styles.item}>
                        <Text>{formatDay}</Text>
                        <Text>Image</Text>
                        <View style={styles.temperature}>
                            <Text>Temp Min</Text>
                            <Text>{item.item.main.temp_min}</Text>
                        </View>
                        <View style={styles.temperature}>
                            <Text>Temp Max</Text>
                            <Text>{item.item.main.temp_max}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            )}
        }

        renderHeader(data) {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{data.city.name}</Text>
                </View>
            )
        }

        renderSeparator() {
            return <View style={styles.separator} />
        }




        render() {

            let json = this.props.navigation.getParam('requestResult');


            return (
                <View style={styles.container}>
                    <FlatList
                        data={json.list}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.dt.toString()}
                        ListHeaderComponent={this.renderHeader(json)}
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
        header: {
            flex: 1,
        },
        headerText: {
            marginTop: 10,
            marginBottom: 20,
            fontSize: 40,
        },
        item: {
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        temperature: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center"
        },
        separator: {
            height: 0.5,
            width: "100%",
            alignSelf: 'center',
            backgroundColor: "#555"
        },
    });

    /* <Button
    title={"Afficher les détails"}
    onPress={() => {
    this.props.navigation.navigate("MeteoDetail");
}}
/> */
