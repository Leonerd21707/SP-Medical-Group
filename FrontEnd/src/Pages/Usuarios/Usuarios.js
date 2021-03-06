import React, { Component } from 'react';

import "../../assets/css/Usuarios.css";
import Axios from "axios";

import logo from "../../assets/img/icon-login.png";
import { usuarioAutenticado } from '../../Services/auth';


class Usuarios extends Component {

    constructor() {
        super();

        this.state = {
            tipoUsuario: "",
            Email: "",
            Senha: ""
        };
    }

    atualizaEstadoTipoUsuario(event) {
        this.setState({ tipoUsuario: event.target.value });
    }

    atualizaEstadoEmail(event) {
        console.log(event.value)
        console.log(this.state.Email)
        this.setState({ Email: event.target.value });
    }

    atualizaEstadoSenha(event) {
        this.setState({ Senha: event.target.value });
    }

    cadastrarUsuario(event) {
        event.preventDefault();


        Axios.post("http://192.168.3.72:5000/api/usuario", 
        {    
            idTipo: parseInt(this.state.tipoUsuario),
            email: this.state.Email,
            senha: this.state.Senha,
            }, {
                headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + localStorage.getItem("Usuario-MedGroup")},
            }
            ).then(resposta => resposta.json())
            .then(data => console.log(data))
            .catch((erro) => console.log(erro))


    }

    render() {
        return (
            <div className="Usuarios">
                <header className="Cabecalho-Principal">
                    <div className="container">
                        <nav className="cabecalho-principal-nav">
                            <div className="abas"><a href="/">Login</a></div>
                            <div className="abas"><a>clinicas</a></div>
                            <div className="abas"><a href="/consultas">Consultas</a></div>
                            <div className="abas"><a>Prontuario</a></div>
                            <div className="abas"><a>Medicos</a></div>

                        </nav>
                    </div>

                </header>
                <div className="area-cadastro">
                    <div className="logoUser">
                        <img src={logo} /><h1 className="h1User">Cadastrar Usuario</h1>
                    </div>
                    <form className="formUser" onSubmit={this.cadastrarUsuario.bind(this)}>
                        <div className="containers">

                            <div className="item">
                                <h3>Tipo de Usuario:</h3>
                                <input
                                    className="inpu_login"
                                    placeholder="tipo usuario"
                                    type="text"
                                    value={this.state.tipoUsuario}
                                    onChange={this.atualizaEstadoTipoUsuario.bind(this)}
                                    name="username"
                                    id="login_email"
                                />
                            </div>

                            <div className="item">
                                <h3>Email:</h3>
                                <input
                                    className="inpu_login"
                                    placeholder="username"
                                    type="text"
                                    value={this.state.Email}
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
                                    value={this.state.Senha}
                                    onChange={this.atualizaEstadoSenha.bind(this)}
                                    type="password"
                                    name="password"
                                    id="login_password"
                                />
                            </div>
                            <button type="submit" className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                Cadastrar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Usuarios;
