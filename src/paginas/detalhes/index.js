import { ScrollView, View, Text,Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import styles from "./style";

export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>
                <Image style={styles.images} source={{uri:(route.params.imagem)}}/>

                <Text style={styles.titulo}>{route.params.titulo}</Text>
                <Text style={styles.textNota}>{route.params.nota}</Text>

                <Text> {route.params.sinopse} </Text>
            </View>
        </ScrollView>
    )
}