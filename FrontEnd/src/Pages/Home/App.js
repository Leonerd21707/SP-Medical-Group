import React, { Component } from 'react';
import "../../assets/css/Home.css";

import logo from "../../assets/img/icon-login.png";
import Usuarios from '../Usuarios/Usuarios';
import Axios from "axios";
import { jwt } from '../../Services/jwt.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      erroMensagem: ''
    }
  }

  atualizaEstadoEmail(event) {
    this.setState({ email: event.target.value });
  }

  atualizaEstadoSenha(event) {
    this.setState({ senha: event.target.value });
  }

  efetuaLogin(event) {
    event.preventDefault();

    Axios.post("https://localhost:5001/api/login", {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(data => {
        if (data.status === 200) {
          console.log(data);
          localStorage.setItem("Usuario-MedGroup", data.data.token);
          
          this.props.history.push("/Consultas");
        }
      })
      .catch(erro => {
        this.setState({ erroMensagem: 'Email ou senha inválido' });
        console.log(erro);
      })

  }

  render() {
    return (
      <div className="App">
        <header className="Cabecalho-Principal">
          <div className="container">
            <nav className="cabecalho-principal-nav">
              <div className="abas"><a>clinicas</a></div>
              <div className="abas"><a href="/consultas">Consultas</a></div>
              <div className="abas"><a href="/Usuarios">Usuarios</a></div>
              <div className="abas"><a>Prontuario</a></div>
              <div className="abas"><a>Medicos</a></div>
            </nav>
          </div>
        </header>
        <div className='area-login'>
          <div className="logoApp">
            <img src={logo} /><h1 className="h1App">Login</h1>

          </div>
          <form className="formApp" onSubmit={this.efetuaLogin.bind(this)}>
            <div className="item">
              <h3>Email:</h3>
              <input
                className="inpu_login"
                placeholder="username"
                type="text"
                value={this.state.email}
                onChange={this.atualizaEstadoEmail.bind(this)}
                name="username"
                id="login_email"
              />
            </div>
            <div className="item">
              <h3>Senha:</h3>
              <input
                className="input_login"
                placeholder="password"
                value={this.state.senha}
                onChange={this.atualizaEstadoSenha.bind(this)}
                type="password"
                name="password"
                id="login_password"
              />
            </div>
            <p className="text_login" style={{ color: 'red', textAlign: 'center' }}>{this.state.erroMensagem}</p>
            <div className="item">
              <button type="submit" className="btn btn_login" id="btn_login">
                Login
                </button>
            </div>
          </form>

        </div>


      </div>
    );
  }
}

export default App;
