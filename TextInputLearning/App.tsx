import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

function App() {
const [name, setName] = useState("");

  return (
    <View >
      <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
      <Text style={{ fontSize: 30 }}>Your Name is: {name}</Text>

      <TextInput style={styles.textInput}
        placeholder='Enter Your name' 
        value={name}
        onChangeText={(text: any) => setName(text)}/>
        <Button title='Clear Input Value' onPress={()=>setName("")}></Button>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})