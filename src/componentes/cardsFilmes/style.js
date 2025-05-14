import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

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
        marginBottom: '40px',
        marginRight: '20px',
        width:'210px',
        height:'430px'
    },

    titulo:{
        fontWeight: 500,
        color: '#fff',
        fontSize:17,
        paddingTop:8,
        marginBottom:20
    },
    textNota:{
        fontSize:19,
        color: '#FFCC33',
        paddingLeft:4
    },
    images:{
        width:'170px',
        height:270,
        borderRadius:8
    }
})

export default styles