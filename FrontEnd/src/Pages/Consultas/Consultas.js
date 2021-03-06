import React, { Component } from 'react';
import "../../assets/css/Consultas.css"

import logo from "../../assets/img/icon-login.png";
import { _extend } from 'util';
import { jwt } from '../../Services/jwt';

class Consultas extends Component {
    constructor() {
        super();

        this.state = {

            IdProntuarios: "",
            IdMedicos: "",
            descricao: "",
            dataConsulta: "",
            IdStatus: "",
            listaConsultas: [],
            listaConsultasMedico: [],
            listaConsultasPaciente: []
        };
    }

    listaConsultas() {
        fetch("http://localhost:5000/api/consulta/todos/" + jwt().jti, { headers: { Authorization: `Bearer ${localStorage.getItem("Usuario-MedGroup")}` } })
            .then(console.log(`Bearer ${localStorage.getItem("Usuario-MedGroup")}`))
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsultas: data }, console.log(data)))
            .catch((erro) => console.log(erro))
    }

    listaConsultasMedico() {
        fetch("http://localhost:5000/api/consulta/medico/" + jwt().jti, { headers: { Authorization: `Bearer ${localStorage.getItem("Usuario-MedGroup")}` } })
            .then(console.log(`Bearer ${localStorage.getItem("Usuario-MedGroup")}`))
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsultasMedico: data }, console.log("Medico " + data)))
            .catch((erro) => console.log(erro))
    }

    listaConsultasPaciente() {
        fetch("http://localhost:5000/api/Consulta/paciente/" + jwt().jti, { headers: { Authorization: `Bearer ${localStorage.getItem("Usuario-MedGroup")}` } })
            .then(console.log(`Bearer ${localStorage.getItem("Usuario-MedGroup")}`))
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsultasMedico: data }, console.log("Medico " + data)))
            .catch((erro) => console.log(erro))
    }

    atualizaEstadoProntuario(event) {
        this.setState({ IdProntuarios: event.target.value });
    }

    atualizaEstadoMedico(event) {
        this.setState({ IdMedicos: event.target.value });
    }

    atualizaEstadoData(event) {
        this.setState({ dataConsulta: event.target.value });
    }

    atualizaEstadoStatus(event) {
        this.setState({ IdStatus: event.target.value });
    }

    atualizaEstadoDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    cadastrarConsultas(event) {

        event.preventDefault();

        fetch('http://192.168.3.72:5000/api/consulta', {
            method: 'POST'
            , headers: {
                'Content-Type': 'application/json', 'Authorization':
                    `Bearer ${localStorage.getItem("Usuario-MedGroup")}`
            }
            , body: JSON.stringify({
                IdProntuarios: this.state.IdProntuarios,
                IdMedicos: this.state.IdMedicos,
                dataConsulta: this.state.dataConsulta,
                IdStatus: this.state.IdStatus,
                descricao: this.state.descricao
            })
        })
            .then(resposta => resposta.json())
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    this.props.push("/");
                }
            })
            .catch((erro) => console.log(erro))
    }


    componentDidMount() {
        if (jwt().Role === "Administrador") {
            this.listaConsultas();
        } else if (jwt().Role === "Medico") {
            this.listaConsultasMedico();
        } else if (jwt().Role === "Paciente") {
            this.listaConsultasPaciente();
        }
    }

    render() {
        if (jwt().Role === "Administrador") {
            return (
                <div className="Consultas">
                    <header className="Cabecalho-Principal">
                        <div className="container">
                            <nav className="cabecalho-principal-nav">
                                <div className="abas"><a href="/">Login</a></div>
                                <div className="abas"><a>clinicas</a></div>
                                <div className="abas"><a href="/usuarios">Usuarios</a></div>
                                <div className="abas"><a>Prontuario</a></div>
                                <div className="abas"><a href="/consultas/medico">Medicos</a></div>

                            </nav>
                        </div>

                    </header>
                    <main>
                        <section className="Conteudo-principal-consulta">
                            <h2 className="h2cconsultas">Cadastrar Consultas</h2>

                            <div className="cadastrar-consultas">

                                <form onSubmit={this.cadastrarConsultas.bind(this)}>
                                    <div className="cont">
                                        <h3>Paciente</h3>
                                        <input
                                            type="text"
                                            id="nome-paciente"
                                            value={this.IdProntuario}
                                            onChange={this.atualizaEstadoProntuario.bind(this)}
                                            placeholder="ID paciente"

                                        />
                                        <h3>Medico</h3>
                                        <input
                                            type="text"
                                            id="nome-medico"
                                            value={this.IdMedico}
                                            onChange={this.atualizaEstadoMedico.bind(this)}
                                            placeholder="ID medico"
                                        />
                                        <h3>Data da consulta</h3>
                                        <input
                                            type="data"
                                            id="data-consulta"
                                            value={this.dataConsulta}
                                            onChange={this.atualizaEstadoData.bind(this)}
                                            placeholder="Data da consulta"
                                        />

                                        <h3>Status</h3>
                                        <input
                                            type="text"
                                            id="Status"
                                            value={this.IdStatus}
                                            onChange={this.atualizaEstadoStatus.bind(this)}
                                            placeholder="Status da consulta"
                                        />

                                        <h3>Descrição</h3>
                                        <textarea
                                            type="text"
                                            id="descricao"
                                            value={this.descricao}
                                            onChange={this.atualizaEstadoDescricao.bind(this)}
                                            placeholder="Descrição dos sintomas"
                                        />

                                        <button
                                            id="ubt"
                                            type="submit"> Cadastrar
                                    </button>

                                    </div>
                                </form>
                            </div>
                            
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
                                                console.log(consultas)
                                                return (
                                                    <tr key={consultas.id}>
                                                        <td>{consultas.id}</td>
                                                        <td>{consultas.idProntuariosNavigation.id}</td>
                                                        <td>{consultas.idMedicosNavigation.id}</td>
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

                            }
                    </section>
                    </main>
                </div>
            );

        }
        if (jwt().Role === "Medico") {
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

                                        this.state.listaConsultasMedico.map(function (consMed) {
                                            return (
                                                <tr key={consMed.id}>
                                                    <td>{consMed.id}</td>
                                                    <td>{consMed.idProntuariosNavigation.id}</td>
                                                    <td>{consMed.idMedicosNavigation.id}</td>
                                                    <td>{consMed.dataConsulta.split("T")[0]}</td>
                                                    <td>{consMed.idStatusNavigation.nome}</td>
                                                    <td>{consMed.descricao}</td>

                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>
                    </main>

                </div>
            );
        }

        if (jwt().Role === "Paciente") {
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

                                        this.state.listaConsultasPaciente.map(function (consPac) {
                                            return (
                                                <tr key={consPac.id}>
                                                    <td>{consPac.id}</td>
                                                    <td>{consPac.idProntuariosNavigation.id}</td>
                                                    <td>{consPac.idMedicosNavigation.id}</td>
                                                    <td>{consPac.dataConsulta.split("T")[0]}</td>
                                                    <td>{consPac.idStatusNavigation.nome}</td>
                                                    <td>{consPac.descricao}</td>

                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>
                    </main>

                </div>
            );
        }


    }


}


export default Consultas;