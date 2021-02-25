//By SFV-CORE

import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      valor: 0,
      listaValue: 0,
      Lista: [
        {Key: 1, Sexo: 'Masculino'},
        {key: 2, Sexo: 'Feminino'},
      ],
      status: false,
    };
  }

  render() {
    let listaItem = this.state.Lista.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.Sexo} />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.area}>
          <View style={styles.bloco}>
            <View style={styles.divNome}>
              <Text style={styles.txtNome}>Nome de Usuário</Text>
              <TextInput
                style={styles.input}
                textAlign={'center'}
                placeholder="Nome"
                onChangeText={(text) => this.setState({Nome: text})}
              />
            </View>

            <View style={styles.divPicker}>
              <Text style={styles.txtPicker}>Selecione o Sexo</Text>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  borderWidth: 1,
                  borderColor: '#2F4F4F',
                  borderRadius: 50,
                  paddingHorizontal: 12,
                  marginTop: 10,
                }}>
                <Picker
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={this.state.listaValue}
                  onValueChange={(value) => this.setState({listaValue: value})}>
                  {listaItem}
                </Picker>
              </View>
            </View>

            <View style={styles.divSlider}>
              <Text style={styles.txtSlider}> Selecione seu crédito </Text>
              <Slider
                minimumValue={2000}
                maximumValue={15000}
                onValueChange={(valSelected) =>
                  this.setState({valor: valSelected})
                }
                minimumTrackTintColor={'#00FF00'}
                value={this.state.valor}
                style={styles.slider}
              />
              <Text style={styles.txtSliSelect}>
                R$: {this.state.valor.toFixed(0)}{' '}
              </Text>
            </View>

            <View style={styles.divSwitch}>
              <Text style={styles.txtSlider}>Você é estudante?</Text>
              <Switch
                style={styles.Switch}
                trackColor={{false: '#800000', true: '#00CED1'}}
                thumbColor={'#767577'}
                value={this.state.status}
                onValueChange={(val) => this.setState({status: val})}
              />
            </View>

            <View style={styles.divButton}>
              <TouchableOpacity
                style={styles.buttun}
                onPress={() =>
                  Alert.alert(
                    'Dados ',
                    'Nome: ' +
                      this.state.Nome +
                      '\n' +
                      'Sexo: ' +
                      this.state.Lista[this.state.listaValue].Sexo +
                      '\n' +
                      'Crédito: ' +
                      this.state.valor.toFixed(0) +
                      '\n' +
                      'Estudante: ' +
                      this.state.status,
                  )
                }>
                <Text style={styles.txtButtun}>Exibir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  area: {
    height: 550,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: 75,
  },
  bloco: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divNome: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNome: {
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    fontSize: 20,
    width: 250,
    borderWidth: 1,
    borderColor: '#2F4F4F',
    borderRadius: 50,
  },
  divPicker: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPicker: {
    fontSize: 20,
  },
  picker: {
    width: 140,
    color: '#483D8B',
  },
  divSlider: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSlider: {
    fontSize: 20,
  },
  slider: {
    width: 250,
    marginTop: 10,
  },
  divSwitch: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginTop: 10,
    width: 100,
  },
  divButton: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButtun: {
    textAlign: 'center',
    color: '#DCDCDC',
  },
  buttun: {
    width: 250,
    padding: 20,
    borderWidth: 1,
    borderColor: '#778899',
    borderRadius: 50,
    backgroundColor: '#708090',
  },
});

export default App;
