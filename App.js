import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'
export default class Inputs extends Component {
constructor(props){
super(props);
this.state={n1:0,n2:0}; // declares and initializes n1 and n2 as 0
}



division = () => { // This calculates the bami of the user and tells them their weight level
var a=parseFloat(this.state.n1);
var b=parseFloat(this.state.n2);
var r=a/(b*b);
if(r < 16){
            alert("You are: Severly Under Weight");
        }
        else if(r < 18.5){
                    alert("You are: Under Weight");
                }else if (r >= 18.5 && r <= 24.9 ){
                    alert("You Have A Normal Weight");
                }else if (r >= 25 && r <= 29.9){
                    alert("You are: Overweight");
                }
        else{
        alert("You are: Obese");
        }
}



render(){
return(  //where the user can type their weight and height and is where the button is
<View style ={styles.v}><Text style={styles.txt}>Calculator</Text> 
<TextInput keyboardType='numeric' placeholder="Enter Weight(kg)" placeholderTextColor='white' style={styles.input}
 onChangeText={n1=>this.setState({n1})}
 />
<TextInput keyboardType='numeric' placeholder="Enter Height(m)" placeholderTextColor='white' style={styles.input}
onChangeText={n2=>this.setState({n2})}
/>


<View style={styles.btn}> 
<Button title='Calculate BMI' color='pink' onPress={this.division} /> 
</View>
</View>

)
}
}

const styles=StyleSheet.create({ //The stylesheet used to the code
txt:{color: 'white',
     fontSize:20,
     textAlign:'center'},
     button:{
     borderColor:'pink',
     borderWidth:3,
     fontSize:40,
     margin:20,
     borderRadius:6,
     backgroundColor:'white',
     width:50,
     textAlign:'center',
     },
     input:{
     borderColor:'pink',
     borderWidth:3,
     fontSize:30,
     width:'70%',
     marginTop:40,
     marginLeft:55,
     marginRight:50,
     },
     container:{
     flexDirection:'row'

     },
     v:{
     backgroundColor:'gray',
     flex:1,
     },
     btn:{
     marginTop: 30,
          backgroundColor:'red',

          },
})