import {createStackNavigator} from 'react-navigation';

import LocalisationSearch from '../LocalisationSearch';
import LocalisationResult from '../LocalisationResult';
import LocalisationDetail from '../LocalisationDetail';
import MeteoSearch from '../MeteoSearch';
import MeteoResult from '../MeteoResult';
import MeteoDetail from '../MeteoDetail';
import FavorisList from '../FavorisList';
import FavorisDetail from '../FavorisDetail';


export const LocalisationStack = createStackNavigator({
    LocalisationSearch: {
        screen: LocalisationSearch
    },
    LocalisationResult: {
        screen: LocalisationResult
    },
    LocalisationDetail: {
        screen: LocalisationDetail
    }
});

export const MeteoStack = createStackNavigator({
    MeteoSearch: {
        screen: MeteoSearch
    },
    MeteoResult: {
        screen: MeteoResult
    },
    MeteoDetail: {
        screen: MeteoDetail
    }
});

export const FavorisStack = createStackNavigator({
    FavorisList: {
        screen: FavorisList
    },
    FavorisDetail: {
        screen: FavorisDetail
    },
});
