import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import {MeteoStack} from "./StackNavigation";
import {LocalisationStack} from "./StackNavigation";
import {FavorisStack} from "./StackNavigation";


export default class Menu extends React.Component {
    render() {
        const tintColor = '#ffffff';
        const MenuScreen = createBottomTabNavigator({
            Meteo: {
                screen: MeteoStack,
            },
            Localisation: {
                screen: LocalisationStack,
            },
            Favoris: {
                screen: FavorisStack
            }
        },
        {
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => {
                    const {routeName} = navigation.state;
                    let iconName;
                    if (routeName === 'Meteo') {
                        iconName = 'search';
                    } else if (routeName === 'Localisation') {
                        iconName = 'map-marker';
                    } else if (routeName === 'Favoris') {
                        iconName = 'heart';
                    }
                    return <Icon name={iconName} size={25} color={tintColor}/>
                },
                /*tabBarButtonComponent: TouchableOpacity,*/
            }),
            tabBarOptions: {
                activeTintColor: '#ffffff',
                inactiveTintColor: '#24773a',
                activeBackgroundColor: '#23a844',
                inactiveBackgroundColor: '#23a844',
                showLabel: false,
                // tabStyle: {borderColor: '#99a89d', borderWidth: 0.5, borderStyle: 'solid',}
            },
        });
        return (
            
            <View style={{flex:1,}}>
                <MenuScreen />
            </View>
        );
    }


    const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
}
