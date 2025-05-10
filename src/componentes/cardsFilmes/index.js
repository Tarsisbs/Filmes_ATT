import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo, nota, imagem}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Detalhes', {imagem, titulo, nota})}>
            <Image style={styles.images} source={{uri:(imagem)}} />
            <Text style={styles.titulo}> {titulo} </Text>

            <Text style={styles.textNota}> {nota} </Text>
        </TouchableOpacity>

    )
}