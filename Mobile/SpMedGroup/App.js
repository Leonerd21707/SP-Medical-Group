import React, { Component } from './node_modules/react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import api from "../SpMedGroup/src/services/api";


export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
  }

  _verificarLogin = async() => {
    if (await AsyncStorage.getItem("Usuario-MedGroup") != null) {
      this.props.navigation.navigate("MainNavigator");
    }
  } 

  _realizarLogin = async () => {
    const resposta = await api.post("/login", {
      email: this.state.email,
      senha: this.state.senha
    });

    const token = resposta.data.token;
    await AsyncStorage.setItem("Usuario-MedGroup", token);
    this.props.navigation.navigate("MainNavigator");
  };

  componentDidMount() {
    this._verificarLogin();
  }

  render() {
    return (
      <View
        style={styles.body}
      >



        <Image
          source={require("./src/assets/Img/icon-login.png")}
          style={styles.image}
        />


        <View style={styles.login}>

          <TextInput
            style={styles.campos}
            placeholder="Informe seu email"
            onChangeText={email => this.setState({ email })}

          />
          <TextInput
            style={styles.campos}
            placeholder="Informe sua senha"
            onChangeText={senha => this.setState({ senha })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this._realizarLogin}
          >
            <Text style={styles.fontsT}>Sign In</Text>
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
  fontsT: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',

  },
  campos: {
    margin: 10,
    height: 60,
    backgroundColor: 'white',

  },
  button: {
    marginTop: 10,
    padding: '1%',
    height: 40,
    backgroundColor: 'green',

  },

  image: {
    marginLeft: 110,
    marginTop: 50,
    width: 120,
    height: 120

  }



});