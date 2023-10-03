import React from "react";
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25
          }
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
        //******for single screen design */
        // options={{
        //   title: "User Login",
        //   headerStyle: {
        //     backgroundColor: 'blue',
        //   },
        //   headerTintColor: 'white',
        //   headerTitleStyle: {
        //     fontSize: 30
        //   }
        // }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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