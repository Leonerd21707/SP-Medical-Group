import React, { Component } from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";
import api from "./src/services/api";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IdProntuario: "",
            IdMedico: "",
            descricao: "",
            dataConsulta: "",
            IdStatus: "",
            listaConsultas: []
        };
    }

    listaConsultas = async () => {
        const resposta = await api.get("/consulta/todos/3");
        const dadosDaApi = resposta.data;
        this.setState({ listaConsultas: dadosDaApi });
    };

    render() {
        return (
            <View style={styles.body}>
                <View>
                    <Text style={styles.titulo}>
                        Lista Consultas
                    </Text>
                    <ScrollView>
                        {
                            this.state.listaConsultas.map(function (consulta) {

                                <View key={consulta.id}>
                                    <Text>{consulta.IdProntuario}</Text>
                                    <Text>{consulta.IdMedico}</Text>
                                    <Text>{consulta.IdStatus}</Text>
                                    <Text>{consulta.descricao}</Text>
                                </View>

                            })
                        }
                    </ScrollView>

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
    titulo: {
        marginTop: '10%',
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    }

})

export default Main;