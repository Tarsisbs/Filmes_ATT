import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo, categoria, lancamento, nota, notaDetalhes, imagem, sinopse}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Detalhes', {imagem, titulo, categoria, lancamento, notaDetalhes, sinopse})}>
            <Image style={styles.images} source={{uri:(`https://image.tmdb.org/t/p/original/${imagem}`)}} />
            <Text style={styles.titulo}> {titulo} </Text>

            <Text style={styles.textNota}> {nota} </Text>
        </TouchableOpacity>

    )
}