import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

function App(){
  //I want to send this name to User Component so I cannot send it directly 
  // but I can send it through props
  //let name = "Abhaya";

  const [name, setName] = useState("Anjali");
return(
 <View >
  <Text style= {{fontSize: 30}}>Props</Text>
  {/* <User name = {"Arpita"}/> */}
  <Button title='Update Props' onPress={() =>setName("Bruce")}></Button>
  <User name = {name} age = {21}/>
 </View>
);
}

function User(props: any){
  //console.warn(props.name)
  return(
    <View style={{backgroundColor: 'green', padding: 5}}>
  <Text style= {{fontSize: 30}}>{props.name} {props.age}</Text>
 </View>
  )
}
export default App;