import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LocalisationResult from './LocalisationResult';

export default class LocalisationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.soleil = require("./soleil.png");
        this.pluie = require("./pluie.png");
        this.neige = require("./neige.png");
        this.state = {
          distance: '',
          meteo: '',
          temperature: '',
          modalVisible: false,
          values: "",
          icone: require("./meteo.png")
        }
      }

    static navigationOptions = {
        title: 'Localisation',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    iconeSelectedSoleil() {
    
        return this.state.icone = this.soleil;
    
    }
    
    iconeSelectedPluie() {
    
        return this.state.icone = this.pluie;
    }
    
    iconeSelectedNeige() {
    
        return this.state.icone = this.neige;
    }

    render() {
        return (
            <View style={{flex:4}}>
       
            <View style={{flex: 1 , justifyContent: 'flex-start', alignItems: "flex-start", flexDirection: "row", paddingTop: 50}} >
              
              <Text style={{flex: 1, marginLeft: 10}} >Une fois la géolocalisation activée, vous pourrez retrouver des lieux qui vous correspondent tout près de chez vous !</Text>
              <TouchableOpacity style={styles.button} onPress={this.onPress}>
                <Image style={{width: 30, height: 30, marginRight: 10}} source={require('./location.png')} />
              </TouchableOpacity>
    
            </View>
    
            <View style={{flex:3, flexDirection: 'row'}}>
              
            <Picker
              style={{width: 150}}
              selectedValue={this.state.distance}
              onValueChange={(km) => this.setState({distance: km})}>
              <Picker.Item label="0 – 25 km" value="dist1" />
              <Picker.Item label="26 – 50 km" value="dist2" />
              <Picker.Item label="51 – 75 km" value="dist3" />
              <Picker.Item label="76 – 100 km" value="dist4" />
            </Picker>
    
            <Picker
              style={{width: 150}}
              selectedValue={this.state.temperature}
              onValueChange={(temp) => this.setState({temperature: temp})}>
              <Picker.Item label="-5° – 0°" value="temp1" />
              <Picker.Item label="1° – 10°" value="temp2" />
              <Picker.Item label="11° – 20°" value="temp3" />
              <Picker.Item label="21° – 30°" value="temp4" />
            </Picker>
    
    <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 0, flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'}}>
              <View style={{
                width: 200,
                height: 150, borderWidth: 1, borderColor: "black", flexDirection: "row", justifyContent: "space-around", alignItems: "center", shadowOffset:{width: 10, height: 5}, shadowColor: "black", shadowOpacity: 1.0, shadowRadius: 5, backgroundColor: "white"}}>
    
                <TouchableOpacity onPress={() => {this.setState({values: this.soleil}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedSoleil()}}>
                  <Image source={require('./img/soleil.png')} /> 
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => {this.setState({values: this.pluie}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedPluie()}}>
                  <Image source={require('./img/pluie.png')} /> 
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => {this.setState({values: this.neige}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedNeige()}}>
                  <Image source={require('./img/neige.png')} /> 
                </TouchableOpacity>
    
                {/* <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight> */}
              </View>
            </View>
          </Modal>
          {/* <Text>{this.state.values}</Text> */}
          {/* <Image source={this.state.values} />  */}
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            
            {/* <View>{test}</View> */}
            {/* <Text>Show Modal</Text> */}
            <Image source={this.state.icone} />
          </TouchableOpacity>
            
    
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Button
                        title={"Rechercher"}
                        onPress={() => {
                            this.props.navigation.navigate("LocalisationResult");
                        }} color="green"/>
            </View>
            
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
