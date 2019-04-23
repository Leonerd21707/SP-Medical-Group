import React, { Component } from 'react';
import "../../assets/css/Consultas.css"

import logo from "../../assets/img/icon-login.png";
import { usuarioAutenticado } from '../../Services/auth';
import { _extend } from 'util';

class Consultas extends Component {
    constructor() {
        super();

        this.state = {
            prontuario: "",
            medico: "",
            descricao: "",
            data: "",
            status: ""
        };
    }

    listarCOnsultas() {
        fetch("https://localhost:5001/api/consultas")
            .then(resposta => resposta.json())
            .then(data => console.log(data))
            .catch((erro) => console.log(erro))
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
                    <div className="ListarConsultas">
                        <div className="logoConsultas">
                            <img src={logo} /><h1 className="h1consultas">Listar Consultas</h1>
                        </div>

                        <table className="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Prontuario</th>
                                    <th>Medico</th>
                                    <th>Descrição</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaConsultas.map(function (consultas) {
                                        return (
                                            <tr key={Consultas.id}>
                                                <td>{consultas.id}</td>
                                                <td>{consultas.prontuario}</td>
                                                <td>{consultas.medico}</td>
                                                <td>{consultas.descricao}</td>
                                                <td>{consultas.data}</td>
                                                <td>{consultas.status}</td>

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
export default Consultas;