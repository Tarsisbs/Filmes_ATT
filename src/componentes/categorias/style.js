import { StyleSheet } from "react-native";
import Categoria from ".";

const styles = StyleSheet.create({
    Categoria: {
        margin: 15,
        marginRight: -5,
        marginLeft: 30,
        padding: 15,
        backgroundColor: '#0e0e1aff',
        width: 150,
        height: 40,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0c0a27ff',
        borderWidth: 2,
    },
    nomeCategoria: {
        fontSize: 15,
        color: "white",
    },
    underline: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: '100%',
        marginTop: 5,
    },

    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 50,
        marginTop: 20,
        fontWeight: 'bold',
        height: 10,
    }
});

export default styles;