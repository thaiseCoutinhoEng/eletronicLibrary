import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class SearchScreen extends Component {
    render(){
        return(
            <View style={style.container}>
                <Text style={StyleSheet.text}>Tela de Pesquisa</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5653D4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#ffff',
        fontSize: 30
    }
})