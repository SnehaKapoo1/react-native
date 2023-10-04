import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import UserData from "./components/UserData";
const App = () => {
  const users = [
    {
      id: 1,
      name: "Sneha",
      email: "sk@gmail.com"
    },
    {
      id: 2,
      name: "Neha",
      email: "nk@gmail.com"
    },
    {
      id: 3,
      name: "Samir",
      email: "samir@gmail.com"
    },

  ];
  return (
    <View>
      <Text style={{ fontSize: 27 }}>
        Components with FlatList
      </Text>
      <FlatList
        data={users}
        renderItem={({ item}) => <UserData item = {item}/> }
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   item: {
//      fontSize: 24,
//      color: "orange",
//      flex: 1,
//      margin: 2,
//      backgroundColor: "green",

//   },
//   box: {
//     flexDirection: "row",
//     borderWidth: 2,
//     borderColor : "orange",
//     marginBottom: 10
//   }
// })

export default App;