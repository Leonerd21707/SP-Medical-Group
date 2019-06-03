import React, { Component } from './node_modules/react';
import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity, AsyncStorage,
  Image,
  ImageBackground
} from 'react-native';
import api from "../SpMedGroup/src/services/api";
import { white } from 'ansi-colors';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      erroMensagem: ''
    }
  }

  _realizarLogin = async () => {
    const resposta = await api.post("/login", {
      email: this.state.email,
      senha: this.state.senha
    });

    const token = resposta.data.token;
    await AsyncStorage.setItem("Usuario-MedGroup", token);
    alert("voce esta logado" + {token});
  };


  render() {
    return (
      <View
        style={styles.body}
      >
        <View
        >

          <Text
            style={styles.Top}>Login</Text>
        </View>
        <View style={styles.login}>

          <Text
            style={styles.fonts}
          >
            Email
        </Text>
          <TextInput
            style={styles.campos}
            placeholder="Informe seu email"
            onChangeText={email => this.setState({ email })}

          />

          <Text
            style={styles.fonts}
          >
            Senha
        </Text>
          <TextInput
            style={styles.campos}
            placeholder="Informe sua senha"
            onChangeText={senha => this.setState({ senha })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this._realizarLogin}
          >
            <Text style={StyleSheet.create({fontSize: 20 })}>Sign In</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#27367f'

  },
  Top: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 40,
    color: 'white'
  },
  login: {
    marginTop: '20%',
    padding: 20
  },
  fonts: {
    fontSize: 30,
    color: 'white'
  },
  campos: {
    height: 60,
    backgroundColor: 'white'
  },
  button: {
    marginTop:10,
    height: 40,
    backgroundColor: 'green',
    
  },


  
});