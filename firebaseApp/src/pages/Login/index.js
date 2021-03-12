import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../firebaseConnection';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  /*

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        alert('Usuário criado  ' + value.user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('Sua senha deve ter pelo menos 6 caracteres');
          return;
        } else if (error.code === 'auth/invalid-email') {
          alert('Email invalido');
          return;
        } else {
          alert('Algo deu errado');
          return;
        }
      });

    setEmail('');
    setSenha('');
  }
*/

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((value) => {
        navigation.navigate('Home', {email: value.user.email});
        setEmail('');
        setSenha('');
      })
      .catch((error) => {
        alert('algo deu errado');
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.fireLogo}>
        <Ionicons name="logo-firebase" size={100} color="#11118c" />
        <FontAwesome5 name="react" size={100} />
      </View>

      <View style={styles.areaForms}>
        <Text style={styles.texto}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          textAlign="center"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setEmail(texto)}
        />

        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          textAlign="center"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setSenha(texto)}
        />
        <TouchableOpacity style={styles.button} onPress={logar}>
          <Text style={styles.txtBtn}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaForms: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  texto: {
    fontSize: 30,
  },
  input: {
    marginBottom: 15,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    width: 250,
    fontSize: 17,
    borderRadius: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 20,
    padding: 10,
    height: 45,
    width: 200,
    backgroundColor: '#3030f0',
  },
  txtBtn: {
    fontSize: 25,
    color: '#FFF',
  },
  fireLogo: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
