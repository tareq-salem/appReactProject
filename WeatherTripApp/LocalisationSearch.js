import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, Picker, Modal, TouchableHighlight, SectionList, TouchableWithoutFeedback } from 'react-native';
import LocalisationResult from './LocalisationResult';
import Geolocalisation from "./components/Geolocalisation";
import { MapView } from 'expo';

export default class LocalisationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.soleil = require("./img/soleil.png");
        this.pluie = require("./img/pluie.png");
        this.neige = require("./img/neige.png");
        this.state = {
          distance: '',
          meteo: '',
          temperature: '',
          modalVisible: false,
          values: "",
          icone: require("./img/meteo.png")
        }
      }

    static navigationOptions = {
        title: 'Localisation',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    iconeSelectedSoleil() {

        this.setState({icone: this.soleil});

    }

    iconeSelectedPluie() {

        this.setState({icone: this.pluie});
    }

    iconeSelectedNeige() {

        this.setState({icone: this.neige});
    }

    render() {
        return (
            <View style={{flex:4}}>

            <View
        style={{
          flex: 2,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingTop: 50,
        }}>
        <Text style={{ flex: 1, marginLeft: 10 }}>
          Une fois la géolocalisation activée, vous pourrez retrouver des lieux
          qui vous correspondent tout près de chez vous !
        </Text>
        <TouchableOpacity
          onPress={() => {
            Geolocalisation.getLocation().then((position) => {
              if (position === "Location services are disabled") {
                alert('Veuillez activer le GPS')}
                else {
                  alert("Position enregistrée");
                }});
          }}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={require('./img/location.png')}
          />
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
                height: 150, borderWidth: 1, borderColor: "black", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "white"}}>

                <TouchableOpacity onPress={() => {this.setState({values: this.soleil}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedSoleil()}}>
                  <Image source={require('./img/soleil.png')} style={{width: 50, height: 50}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setState({values: this.pluie}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedPluie()}}>
                  <Image source={require('./img/pluie.png')} style={{width: 50, height: 50}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setState({values: this.neige}); this.setModalVisible(!this.state.modalVisible); this.iconeSelectedNeige()}}>
                  <Image style={{width: 50, height: 50}} source={require('./img/neige.png')} />
                </TouchableOpacity>

              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image source={this.state.icone} style={{width: 50, height: 50}} />
          </TouchableOpacity>


            </View>


            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Button
                        title={"Rechercher"}
                        onPress={() => {
                          Geolocalisation.getLocation().then((position) => {
                              if (position === "Location services are disabled") {
                                alert('Veuillez activer le GPS')}
                              else {
                                this.props.navigation.navigate("LocalisationResult", {position: position})
                               }})}}
                        color="green"
            />
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
