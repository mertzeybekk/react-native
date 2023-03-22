import { StyleSheet } from "react-native";
export default StyleSheet.create({

    container:{
        padding:10,
        flexDirection:'row',

    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    title:{
        fontWeight:'bold',
        fontSize:27
    },
    info_container:{
       flex:1,
       flexDirection:'row',
       alignItems:'center'
    },
    inner_container:{
        justifyContent:'center',
        flex:1,
        padding:10,
    },
    year:{
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold'
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5
    },
    soldout_title:{
          color:'red'
    },
    content_container:{
        flexDirection:'row',
     
    }
    
    

})