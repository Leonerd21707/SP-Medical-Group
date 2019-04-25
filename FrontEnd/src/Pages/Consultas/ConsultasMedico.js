import React, { Component } from 'react';
import "../../assets/css/Consultas.css"

import logo from "../../assets/img/icon-login.png";
import { usuarioAutenticado } from '../../Services/auth';
import { _extend } from 'util';

class ConsultasMedico extends Component {
    constructor() {
        super();

        this.state = {
            IdBuscado: { usuarioAutenticado },
            idProntuario: "",
            idMedico: "",
            descricao: "",
            dataConsulta: "",
            idStatus: "",
            listaConsultasMedico: []
        };
    }

    listaConsultasMedico() {
        fetch("http://localhost:5000/api/consulta/medico/{IdBuscado}", { headers: { Authorization: `Bearer ${localStorage.getItem("Usuario-MedGroup")}` } })
            .then(console.log(`Bearer ${localStorage.getItem("Usuario-MedGroup")}`))
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsultasMedico: data }, console.log(data)))
            .catch((erro) => console.log(erro))
    }

    componentDidMount() {
        this.listaConsultasMedico();
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
                                <img src={logo} /><h1 className="h1consultas">Listar Consultas</h1>
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
                                        this.state.listaConsultasMedico.map(function (consultas) {
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
                    </section>
                </main>
            </div>
        );
    }

}
export default ConsultasMedico;