import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './style.js';
import categorias from '../categorias.js';
import CardMovies from '../cardsFilmes/index.js';


const Categoria = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Melhor Avaliado');

    const lidarCategoriaSelecionada = (categoria) => {
        setCategoriaSelecionada(categoria);
    }

    const [moviesTopRated,setMoviesTopRated] = useState([]);

    const [moviesPopular,setMoviesPopular] = useState([]);

    const [moviesUpcoming,setMoviesUpcoming] = useState([]);
    
    const [moviesNowPlaying,setMoviesNowPlaying] = useState([]);

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

            setMoviesTopRated(data.results);
        }

        buscarFilmes();
    },[])

    useEffect(()=>{
        async function buscarFilmes(){
            const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-br-US&page=1';
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

            setMoviesPopular(data.results);
        }

        buscarFilmes();
    },[])

    useEffect(()=>{
        async function buscarFilmes(){
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=pt-br-US&page=1';
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

            setMoviesUpcoming(data.results);
        }

        buscarFilmes();
    },[])

    useEffect(()=>{
        async function buscarFilmes(){
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-br-US&page=1';
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

            setMoviesNowPlaying(data.results);
        }

        buscarFilmes();
    },[])

    return (
        <View style={{ width: '90%' }}>

            <FlatList

                showsHorizontalScrollIndicator={false}

                horizontal = {true}

                data = {categorias}

                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <TouchableOpacity style={[styles.Categoria, categoriaSelecionada === item.nome && {
                        backgroundColor: '#0a0b1fff',
                    }]} onPress={() => lidarCategoriaSelecionada(item.nome)}>
                        <Text style={[styles.nomeCategoria, categoriaSelecionada === item.nome && {
                            color: 'white'
                        }]}>{item.nome}</Text>
                    </TouchableOpacity>
                        
                )}

            />

            {categoriaSelecionada === 'Melhor Avaliado' && (

                <View style={{width:"100%"}}>
                    
                    <Text style={styles.titulo}>Melhor Avaliado</Text>

                    <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {moviesTopRated}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.title} lancamento = {item.release_date} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                      
                      )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Popular' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Popular</Text>

                    <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {moviesPopular}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.title} lancamento = {item.release_date} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                      
                      )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Em breve' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Em breve</Text>

                    <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {moviesUpcoming}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.title} lancamento = {item.release_date} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                      
                      )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Passando agora' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Passando agora</Text>

                    <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {moviesNowPlaying}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMovies titulo = {item.title} lancamento = {item.release_date} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                      
                      )}

                    />

                </View>
            )}
        </View>
    )
}

export default Categoria;