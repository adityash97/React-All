import {StyleSheet,View,Text} from 'react-native'
import { Appbar,TextInput,Button } from 'react-native-paper';
import  React from 'react'
import DispLove from './component/DispLove'


export default class App extends React.Component{
    state={
        person1:'',
        person2:'',
        result:'loading...'
        
    }
    // Bussiness logic here..
    submitIt(fname,lname){
        //setting state properties to blank
        this.setState({person1:'',person2:''})


        //making url call
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${lname}`,
        {
            headers:{
                "x-rapidapi-key": "55e993c091msh6765fd3d2e972c1p1b38b3jsn4c816443a517",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => data.json())
                .then(data=>
                    {
                        console.log(data)
                        this.setState({result:data})
                        
                    })
          .catch(err => console.log("Some Error :",err))
        
    }


    render(){
    return(
        <View style={style.container}>
            {/* Header */}
            <Appbar.Header>
                <Appbar.Content title="Love % Calculator" style={{alignItems:"center"}}/>
            </Appbar.Header>
            {/* Two Input fields */}
            <TextInput
                label="Person 1(M)"
                value={this.state.person1}
                onChangeText={text=> this.setState({person1:text})}
            />
            <TextInput
                label="Person 2(F)"
                value={this.state.person2}
                onChangeText={text => this.setState({person2:text})}
            />
            {/* Button */}
            <Button icon="heart-box" 
            mode="contained" 
            style={{margin:10}}
            onPress={() => this.submitIt(this.state.person1,this.state.person2)}>
                Calculate
            </Button>
          <DispLove result={this.state.result} />
            

            
        </View>
    )

}
}




const style = StyleSheet.create({
    container:{
        flex:1,
        
    }
})