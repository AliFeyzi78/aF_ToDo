import {StyleSheet,Dimensions} from 'react-native';


const main = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#212121',
        paddingTop:10,
    },
    banner:{
        flexDirection:'row', 
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
    },
    todoText:{
        fontSize:50,
        fontWeight:'bold',
        color:'#ffe97d',
        fontStyle:'italic',
        
    },
    todoCount:{
       fontSize:35,
       fontWeight:'500',
       color:'#ffe97d', 
       
    },
})

const todo_Input = StyleSheet.create ({
    inputContainer:{
        backgroundColor:'#ffddc1',
        margin:5,
        padding:3,
        borderRadius:12,

    },
    container:{
        backgroundColor:'#9e9e9e',
        margin:15,
        padding:8,
        borderRadius:12,

    },
    buttonContainer:{
        backgroundColor:'#80deea',
        margin:10,
        padding:5,
        borderRadius:12,
        alignSelf:'center',
        width:Dimensions.get('window').width*0.5,
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'#870000',
    }
})

const todo_card = StyleSheet.create ({
    container: {
        backgroundColor:'white',
        padding:5,
        margin:3,
        borderRadius:8
    },
    text: {
        fontWeight:'bold',
        fontSize:15,
    }
})

export {main, todo_Input, todo_card};