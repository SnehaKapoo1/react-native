import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        UseEffect UnMount Component
      </Text>
      <Button title="Toggle" onPress={() => {setShow(!show)}}/>
      {
        show ? <Student /> : null
      }
      
    </View>
  )
}

const Student = () => {
  //it will be called when component will be mount
  // useEffect(() => {
  //   console.warn("useEffect called")
  // }) 

 let timer = setInterval(() => {
   console.warn("Timer called");
  }, 2000)
  //it will be called when component will be Unmount
  useEffect(() => {
    return () => clearInterval(timer)
  }) 
  return (
    <View>
      <Text style={{
        color: "red",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10
      }}>Student</Text>
    </View>
  )
}

export default App;