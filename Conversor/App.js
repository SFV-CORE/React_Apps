/**

 https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=6bd73272f612ccec5fa5
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Conversor from './src/Conversor';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA={'USD'} moedaB={'BRL'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
