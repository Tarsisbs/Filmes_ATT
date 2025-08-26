import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { use } from "react";
import { useEffect, useState } from "react";

export default function PesquisaFilmes(){
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
        }

        buscarFilmes()
    },[])

    const route = useRoute();

    return(
        <View>
            <Text>{route.params.pesquisa}</Text>
        </View>
    );
}