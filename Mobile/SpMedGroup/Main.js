import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "../services/api";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: []
        };
    }

    listaConsultas = async () => {
        const resposta = await api.get("/consulta/todos/" + {});
        const dadosDaApi = resposta.data;
        this.setState({ listaConsultas: dadosDaApi });
    };

    Render() { 
        return (
            <View>

            </View>
        );

    }
}

    export default Main;