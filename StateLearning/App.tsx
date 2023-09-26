import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App =() =>{
const [name, setName] = useState("Aditya");

//last 
let data= "Sam";

function changeName(){
  setName("Sneha");
  data = "peter";
}
  return(
  <View>
       <Text style= 
       {{backgroundColor: "grey", color: 'black', fontSize: 30}}>
        {name}</Text>
        <Text style= 
       {{fontSize: 30}}>
        {data}</Text>
        <Button title='Update Name' onPress={changeName}></Button>
  </View>
  );
}
export default App;

//data is not get updated because variable  doesnot reRender any component