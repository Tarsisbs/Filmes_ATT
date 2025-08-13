import {StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Home(){
    const navigation = useNavigation();

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function buscarFilmes(){
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br-US&page=1';
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDkwZjY0MDc3MzlkNGRlZTczZmY5MGVhOTIyMTJiNCIsIm5iZiI6MTc1NTAyMTc1NS42LCJzdWIiOiI2ODliODFiYmRhNTkwYmQ0ZmU2ZDc0OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T9aDNRjmw5BKmxu7rygSwTimH8qRxFsh8AWCJKSCZJI'
            }
            };

            const response = await fetch(url, options)
            const data = await response.json();
            console.log(data);

            setMovies(data.results);
        }

        buscarFilmes();
    },[])

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

                      data = {movies}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.title} lancamento = {item.release_date} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                      
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