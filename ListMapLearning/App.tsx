import React from "react";
import { Text, Button, View } from 'react-native';

function App() {
  return (
   <View>
    <Text>List with map learning</Text>
   </View>
  )
}

const Login = (props: any) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Button title="Go to Home Page" onPress={() => props.navigation.navigate("Home")} />
    </View>
  )
}


const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  )
}

export default App;