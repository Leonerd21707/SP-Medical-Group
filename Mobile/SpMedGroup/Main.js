import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "./src/services/api";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: []
        };
    }

    listaConsultas = async () => {
        const resposta = await api.get("/consulta/todos/3" );
        const dadosDaApi = resposta.data;
        this.setState({ listaConsultas: dadosDaApi });
    };

    render() {
        return (
            <View style={styles.body}>
                <View>
                    <Text style = {styles.titulo}>
                        Lista Consultas
                    </Text>
                    <FlatList
                        data={this.state.listaConsultas}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />

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