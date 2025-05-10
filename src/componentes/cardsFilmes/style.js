import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        height:28
    },

    viewPrincipalFilmes:{
        display:'flex',
        gap:'20px',
        flexDirection:'row',
        marginLeft:'-93px',
        marginBottom:'20px'
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
        fontSize:12,
        paddingTop:8
    },
    textNota:{
        fontSize:10,
        color: '#FFCC33',
        paddingLeft:4
    },
    images:{
        width:'130px',
        height:170,
        borderRadius:8
    }
})

export default styles