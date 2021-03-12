import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../firebaseConnection';

export default function Home({route}) {
  const [user, setUser] = useState(route.params.email);
  const navigation = useNavigation();

  async function logout() {
    await firebase.auth().signOut();
    setUser('');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo</Text>
      <Text style={styles.texto}>{user}</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.txtBtn}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
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
});
