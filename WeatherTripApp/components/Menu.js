import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import MeteoScreens from "../MeteoScreens";
import LocalisationScreens from "../LocalisationScreens";
import FavorisScreens from "../FavorisScreens";

export default class Menu extends React.Component {
    render() {
        const tintColor = '#ffffff';
        const MenuScreen = createBottomTabNavigator({
                Meteo: {
                    screen: MeteoScreens,
                },
                Localisation: {
                    screen: LocalisationStack,
                },
                Favoris: {
                    screen: FavorisScreens
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
                    inactiveTintColor: '#99a89d',
                    activeBackgroundColor: '#23a844',
                    inactiveBackgroundColor: '#23a844',
                    showLabel: false,
                    // tabStyle: {borderColor: '#99a89d', borderWidth: 0.5, borderStyle: 'solid',}
                },
            });
        return (
            <MenuScreen />
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
