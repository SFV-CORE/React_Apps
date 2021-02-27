/**
 
/convert?q=USD_PHP&compact=ultra&apiKey=6bd73272f612ccec5fa5
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import api from '../services/api';

class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0,
    };

    this.converter = this.converter.bind(this);
  }

  async converter() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB;
    const response = await api.get(
      'convert?q=USD_BRL&compact=ultra&apiKey=6bd73272f612ccec5fa5',
    );
    let cotacao = response.data[de_para];

    let resultado = cotacao * parseFloat(this.state.moedaB_valor);
    this.setState({valorConvertido: resultado.toFixed(2)});
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {this.props.moedaA} para {this.props.moedaB}
        </Text>

        <TextInput
          placeholder="Valor a ser convertido"
          style={styles.areaInput}
          onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
          <Text style={styles.botaoText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valConvertido}>
          {this.state.valorConvertido === 0 ? '' : this.state.valorConvertido}
        </Text>
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
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  areaInput: {
    width: 200,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  valConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});

export default Conversor;
