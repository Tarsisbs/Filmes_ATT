import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141a28',
        width: '100%',
        height: '100%'
    },

    containerFilmes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#1C2B47',
        padding: 10,
        borderRadius: 5
    },

    image: {
        width:"44%",
        height:260,
        borderRadius: 5
    },

    info: {
        flex: 1,
        marginLeft: 10,
        flexWrap: 'wrap',
    },
    
    titulo: {
        flexShrink: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginBottom: 30
    },

    tituloNota: {
        flexShrink: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginBottom: 30
    },

    numeroNota: {
        color: 'gold',
    }
});

export default styles;