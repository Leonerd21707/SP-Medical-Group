import React, { Component } from 'react';
import "../../assets/css/Consultas.css"

import logo from "../../assets/img/icon-login.png";
import { usuarioAutenticado } from '../../Services/auth';
import { _extend } from 'util';

class Consultas extends Component {
    constructor() {
        super();

        this.state = {
            idProntuario: "",
            idMedico: "",
            descricao: "",
            dataConsulta: "",
            idStatus: "",
            listaConsultas: []
        };
    }

    listaConsultas() {
        fetch("http://localhost:5000/api/consulta/todos", { headers: { Authorization: `Bearer ${localStorage.getItem("Usuario-MedGroup")}` } })
            .then(console.log(`Bearer ${localStorage.getItem("Usuario-MedGroup")}`))
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsultas: data }, console.log(data)))
            .catch((erro) => console.log(erro))
    }

    // atualizaEstadoProntuario(event) {
    //     this.setState({ idProntuarioNavigation: event.target.value });
    // }

    // atualizaEstadoMedico(event) {
    //     this.setState({ idMedicoNavigation: event.target.value });
    // }

    // atualizaEstadoData(event) {
    //     this.setState({ dataConsulta: event.target.value });
    // }

    // atualizaEstadoStatus(event) {
    //     this.setState({ idStatusNavigation: event.target.value });
    // }

    // atualizaEstadoDescricao(event) {
    //     this.setState({ descricao: event.target.value });
    // }

    cadastrarConsultas() {
        //feth faz a conexão com a api
        fetch('http://192.168.4.112:5000/api/eventos', {
            method: 'POST', body: JSON.stringify({
                idProntuarioNavigation: this.state.idProntuarioNavigation, idMedicoNavigation: this.state.idMedicoNavigation, 
                dataConsulta: this.state.dataConsulta, idStatusNavigation: this.state.idStatusNavigation,
                 descricao: this.state.descricao
            }), headers: { 'Content-Type': 'application/json' },

        })
            .then(resposta => resposta.json())
            .then(data => console.log(data))
            .catch((erro) => console.log(erro))
    }


    componentDidMount() {
        this.listaConsultas();
    }

    render() {
        return (
            <div className="Consultas">
                <header className="Cabecalho-Principal">
                    <div className="container">
                        <nav className="cabecalho-principal-nav">
                            <div className="abas"><a href="/">Login</a></div>
                            <div className="abas"><a>clinicas</a></div>
                            <div className="abas"><a href="/usuarios">Usuarios</a></div>
                            <div className="abas"><a>Prontuario</a></div>
                            <div className="abas"><a>Medicos</a></div>

                        </nav>
                    </div>

                </header>
                <main>
                    <section className="Conteudo-principal-consulta">
                        <div className="ListaConsultas">
                            <div className="logoConsultas">
                                <img src={logo} /><h2 className="h2consultas">Listar Consultas</h2>
                            </div>

                            <table className="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Paciente</th>
                                        <th>Medico</th>
                                        <th>Data</th>
                                        <th>Status</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.listaConsultas.map(function (consultas) {
                                            return (
                                                <tr key={consultas.id}>
                                                    <td>{consultas.id}</td>
                                                    <td>{consultas.idProntuarioNavigation.nome}</td>
                                                    <td>{consultas.idMedicoNavigation.nome}</td>
                                                    <td>{consultas.dataConsulta.split("T")[0]}</td>
                                                    <td>{consultas.idStatusNavigation.nome}</td>
                                                    <td>{consultas.descricao}</td>

                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>
                        {/* /* <div className="cadastrar-consultas">
                        <h2 className="h2consultas">Cadastrar Consultas</h2>


                            <form onSubmit={this.cadastrarConsultas.bind(this)}>
                                <div className="cont">
                                    <h3>Nome do Paciente</h3>
                                    <input
                                        type="text"
                                        id="nome-paciente"
                                        value={this.idProntuarioNavigation}
                                        onChange={this.atualizaEstadoProntuario.bind(this)}
                                        placeholder="Nome paciente"
                                    />
                                    <h3>Nome do Medico</h3>
                                    <input
                                        type="text"
                                        id="nome-medico"
                                        value={this.idMedicoNavigation}
                                        onChange={this.atualizaEstadoMedico.bind(this)}
                                        placeholder="Nome medico"
                                    />
                                    <h3>Data da consulta</h3>
                                    <input
                                        type="data"
                                        id="data-consulta"
                                        value={this.dataConsulta}
                                        onChange={this.atualizaEstadoData.bind(this)}
                                        placeholder="data"
                                    />

                                    <h3>Status</h3>
                                    <input
                                        type="text"
                                        id="Status"
                                        value={this.idStatusNavigation}
                                        onChange={this.atualizaEstadoStatus.bind(this)}
                                        placeholder="Status da consulta"
                                    />

                                    <h3>Descrição</h3>
                                    <input
                                        type="text"
                                        id="descricao"
                                        value={this.descricao}
                                        onChange={this.atualizaEstadoDescricao.bind(this)}
                                        placeholder="Status da consulta"
                                    />
                                    
                                    <button type="submit"> Cadastrar 
                                    </button>


                                </div>

                            </form>



                        </div> */
                     }
                    </section>
                </main>
            </div>
        );
    }

}
export default Consultas;