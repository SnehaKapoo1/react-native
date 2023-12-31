import React from "react";
import { Button, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  return (
   <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name='Login' component={Login} />
         <Stack.Screen name='Home' component={Home} />
         
       </Stack.Navigator>
   </NavigationContainer>
  )
};

const Home = () =>{
  return(
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  )
}

const Login = (props: any) =>{
  return(
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button title="Go to Home Page" onPress={()=> props.navigation.navigate("Home")} />
    </View>
  )
}

export default App;