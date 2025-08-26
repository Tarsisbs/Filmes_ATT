import {TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styles from './style.js';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Pesquisa(){

    const[pesquisa, setPesquisa] = useState('');

    const navigation = useNavigation();

    function testeBotao(){
        console.log(pesquisa)
    }

    return(

        <View style={styles.containerSearch}>
            <TextInput onChangeText={(texto)=>setPesquisa(texto)} style={styles.inputSearch} placeholder="Digite o Filme que deseja buscar"/>
            <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa', {pesquisa})}>
                <FontAwesome5 style={styles.iconSearch} name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}