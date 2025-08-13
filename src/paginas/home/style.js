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
      alignItems:'center'
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 15,
      marginLeft: -180,
      marginBottom:'10px',
      fontWeight: 'bold'
    },

    titulo:{
        color: '#fff',
        fontSize:20,
        padding:'15px',
        borderRadius:'15px',
        borderWidth:'1px',
        borderColor:'white',
        backgroundColor: '#1C2B47',
        marginBottom:'30px'
    }
});

export default styles;