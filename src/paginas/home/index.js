import {StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
import Categoria from '../../componentes/categorias/index.js';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>

            <View style={styles.containerView}>

                <Cabecalho/>

                <Pesquisa/>

                <Banner/>

                <Text style={styles.textBanner}>Filmes</Text>

                <Categoria/>

                <TouchableOpacity onPress={()=> navigation.navigate('Desenvolvedores')}>
                  
                  <Text style={styles.titulo}> Desenvolvedores </Text>

                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}