import {Text,View,StyleSheet} from 'react-native'
// import Text from 'react-native-paper'
import React from 'react'

const DispLove =(props)=>{
    console.log(props)
    if(props.result == 'loading...'){
        return (
            <View style={style.container}>
                <Text style={style.text}>Enter The Above Fields..</Text>
            </View>
        )

    }
    return (
        <View style={style.container}>
            <Text style={style.text}>{"Chances : "+props.result.percentage} %</Text>
            <Text style={style.text}>{props.result.result}</Text>
        </View>
    )
}

export default DispLove;



const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:30
    
    },
    text:{
        fontSize:20,
        margin:2

    }
})