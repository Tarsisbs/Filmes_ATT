import { ScrollView, View, Text, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>

                <View style={styles.containerFilme}>
                    <Image style={styles.images} source={{uri: (`https://image.tmdb.org/t/p/original/${route.params.imagem}`)}}/>

                    <Text style={styles.titulo}>{route.params.titulo}</Text>
                    <Text style={styles.titulo}> Lançamento: {route.params.lancamento}</Text>
                    <Text style={styles.textNota}>Nota: ⭐{route.params.nota}</Text>
                </View>

                <Text style={styles.textSinopse}> Sinopse: {route.params.sinopse} </Text>
            </View>
        </ScrollView>
    )
}