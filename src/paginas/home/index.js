import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";


export default function Home(){
    return(
        <ScrollView style={styles.container}>

            <View style={styles.containerView}>

                <Cabecalho/>

                <Pesquisa/>

                <Banner/>

                <Text style={styles.textBanner}>Filmes</Text>

                <View style={{width:"90%"}}>

                <FlatList

                    horizontal = {true}

                    data = {Filmes}

                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (

                    <CardMovies titulo = {item.nome} lancamento = {item.lancamento} nota = {item.nota} notaDetalhes = {item.notaDetalhes} imagem = {item.imagem} sinopse = {item.sinopse}/>
                    
                    )}

                />

                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141a28',
      width: '100%',
      height: '100%'
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 25,
      marginBottom: 20,
      marginLeft: -180,
      fontWeight: 'bold'
    }
  });