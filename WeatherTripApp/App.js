import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import Menu from "./components/Menu";
import MeteoAPI from "./components/MeteoAPI";
import SplashScreen from './components/SplashScreen';


export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            isVisible : true,
        }
    }

    componentDidMount(){
        var self = this;

        setTimeout(function(){
            self.setState({ isVisible : false });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <SplashScreen/>
                <Menu/> */}
                { (this.state.isVisible === true) ? <SplashScreen/>  : <Menu/> }
                {/* <View style={{backgroundColor: 'red'}}></View>
                <View style={{backgroundColor: 'blue'}}></View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
