import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(1),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 3000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View style={{opacity: fadeAnim,}}>
        {this.props.children}
      </Animated.View>
    );
  }
}


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Weather</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }
