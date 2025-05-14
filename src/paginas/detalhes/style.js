import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141a28',
        width: '100%',
        height: '100%'
    },
    
    containerView:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: '20px'
    },

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#141a45',
        padding:'15px',
        borderRadius:'10px',
        marginBottom: '10px',
        marginRight: '20px',
        width:'150px'
    },

    titulo:{
        color: '#fff',
        fontSize:25,
        paddingTop:8
    },
    textNota:{
        fontSize:25,
        color: '#FFCC33',
        paddingLeft:4
    },
    textSinopse:{
        fontSize:20,
        color:'#fff',
        fontWeight:200,
        textAlign:'center',
        marginTop:20
    },
    images:{
        width:'260px',
        height:'380px',
        borderRadius:8
    }
});

export default styles;