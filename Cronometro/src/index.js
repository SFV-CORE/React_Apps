import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Vai',
      ultimo: null,
    };

    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'Vai'});
    } else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1});
      }, 100);

      this.setState({botao: 'Parar'});
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.setState({
        ultimo: this.state.numero,
        numero: 0,
        botao: 'Vai',
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnarea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btntexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btntexto}>limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.ultimo}>
            {this.state.ultimo > 0
              ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's'
              : ''}
          </Text>
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
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -150,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  btnarea: {
    flexDirection: 'row',
    marginTop: 120,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btntexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltimo: {
    marginTop: 40,
  },
  ultimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  },
});

export default App;
