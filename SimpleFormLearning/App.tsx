import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  function resetFormData() {
   setDisplay(false);
   setName("");
   setEmail("");
   setPassword("");
  }

  return (
    <View>
      <Text style={{ backgroundColor: "blue", fontSize: 30, color: "white" }}>
        React native Simple Form 
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button 
        color={"red"}
        title="Submit"
        onPress={() => setDisplay(true)}
         />
      </View>
      <Button 
      title="Reset" 
      onPress={() => resetFormData()}
      />

      {
        display ?
          <View>
           <Text style={{fontSize: 20}}> User Name is: {name} </Text>
           <Text style={{fontSize: 20}}> User Email is: {email} </Text>
           <Text style={{fontSize: 20}}> Password is: {password}</Text>
          </View> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})

export default App;