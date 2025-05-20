import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from './style';


export default function Desenvolvedores(){
  const route = useRoute();
  const navigation = useNavigation();

  return(
    <ScrollView style={styles.container}>

      <View style={styles.containerView}>

        <Text style={styles.textBanner}> Esses são Os caras </Text>
                
        <View style={styles.viewDesenvolvedores}>

          <Image style={styles.images} source={require('../../../assets/Albert_Einstein.jpg')}/>

          <Text style={styles.textTarsis}>

            O meu amor eu guardo para os mais especiais. Não sigo todas as regras da sociedade e às vezes ajo por impulso. Erro, admito. Aprendo, ensino. Todos erram um dia: por descuido, inocência ou maldade. Mas eu sempre tento

            <br></br>
            <br></br>

            - Tarsis B. da Silva

          </Text>

        </View>
        
        <View style={styles.viewDesenvolvedores}>

          <Image style={styles.images} source={require('../../../assets/Nikola_Tesla.jpg')}/>

          <Text style={styles.textSilas}>

            Jurei te amar eternamente, mas como não sou eterno, juro te amar até o fim da minha vida.

            <br></br>
            <br></br>

            - Silas Alcântara P. da Silva

          </Text>

        </View>

        <Text style={styles.textBanner}> Esses Cara sabe muito </Text>

      </View>

    </ScrollView>
  )
}