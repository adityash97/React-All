// Scroll View
import {ScrollView,StyleSheet,Text,View,Image} from 'react-native'
import React from 'react'

export default class App extends React.Component{
    render(){
        return(
            <View style = {style.container}>
            <ScrollView style={style.img}>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
            <Image source={{uri:"https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",height:320,width:320}}></Image>
           
            </ScrollView>

            <View >
                <Text>Demo For Scroll View</Text>
            </View>

            

            
            </View>
        
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    img:{
        marginTop:40
    }
})