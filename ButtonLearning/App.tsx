/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';


function App(){
  // function fruit(){
  //   console.warn("hello I'm a fruit");
  // }
  let data = 10;
  function fruit(val: any){

    data = 20;
    console.warn(data);
  }
  return (
    <View>
      {/* <Text style= {{fontSize: 30}}>Button and onPress Event</Text> */} 

      <Text style= {{fontSize: 30}}>{data}</Text>
      <Button title='On Press' onPress={() => fruit("Hello I'm value")} color={'green'}></Button>
      <Button title='On Press' onPress={fruit} color={'red'}></Button>
    </View>
  );
}


export default App;

//interview questions: 
// after updating the value of data why data is not being changed inside the text
