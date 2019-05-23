import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import logo from "../../assets/Img/icon-login.png";


const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundImg: ''
  },
  login: {
    marginTop: '40%',
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
    padding: 10,
    height: 20
  }
});

// atualizaEstadoEmail(event) {
//   this.setState({ email: event.target.value });
// }

// atualizaEstadoSenha(event) {
//   this.setState({ senha: event.target.value });
// }

// efetuaLogin(event) {
//   event.preventDefault();

//   Axios.post("https://localhost:5001/api/login", {
//     email: this.state.email,
//     senha: this.state.senha
//   })
//     .then(data => {
//       if (data.status === 200) {
//         console.log(data);
//         localStorage.setItem("Usuario-MedGroup", data.data.token);
        
//         this.props.history.push("/Consultas");
//       }
//     })
//     .catch(erro => {
//       this.setState({ erroMensagem: 'Email ou senha inválido' });
//       console.log(erro);
//     })

// }

export default class Login extends Component {
  render() {
    return (
      <View
        style={styles.body}
      >
        <View>
          <Image source={logo}> Login</Image>
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
            onChangeText={(text) => this.setState({ text })}
          />

          <Text
            style={styles.fonts}
          >
            Senha
        </Text>
          <TextInput
            style={styles.campos}
            placeholder="Informe sua senha"
            onChangeText={(text) => this.setState({ text })}
          />

          <Button
          style={styles.button}
            title= 'Sign In'
          >

          </Button>

        </View>

      </View>
    );
  }
}




