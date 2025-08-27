import { View, ScrollView, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { use } from "react";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function PesquisaFilmes({titulo, lancamento, nota, imagem, sinopse}){
    const[filmes, setFilmes] = useState('');

    useEffect(()=>{
        async function buscarFilmes(){
            const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&include_adult=false&language=pt-br&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDkwZjY0MDc3MzlkNGRlZTczZmY5MGVhOTIyMTJiNCIsIm5iZiI6MTc1NTAyMTc1NS42LCJzdWIiOiI2ODliODFiYmRhNTkwYmQ0ZmU2ZDc0OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T9aDNRjmw5BKmxu7rygSwTimH8qRxFsh8AWCJKSCZJI'
                }
            };

            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data.results)
            setFilmes(data.results)
        }

        buscarFilmes()
    },[])

    const route = useRoute();

    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
            <FlatList
                data={filmes}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.containerFilmes} onPress={()=> navigation.navigate('Detalhes', {imagem, titulo, lancamento, nota, sinopse})}>
                        <Image style ={styles.image} source={{uri:(`https://image.tmdb.org/t/p/original/${item.poster_path}`)}}/>
                        <View style={styles.info}>
                            <Text style={styles.titulo}>{item.title}</Text>
                            <Text style={styles.tituloNota}>Nota: <View style={styles.numeroNota}>{item.vote_average}</View></Text>
                            <Text style={styles.titulo}>Lançamento: {"\n"} {item.release_date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
}