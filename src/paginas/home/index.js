import {StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
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

                <View style={{width:"90%"}}>

                  <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {Filmes}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.nome} categoria = {item.categoria} lancamento = {item.lancamento} nota = {item.nota} notaDetalhes = {item.notaDetalhes} imagem = {item.imagem} sinopse = {item.sinopse}/>
                      
                      )}

                  />

                </View>

                <TouchableOpacity onPress={()=> navigation.navigate('Desenvolvedores')}>
                  
                  <Text style={styles.titulo}> Desenvolvedores </Text>

                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}