import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";

function App(){

  const users = [
    {
      id: 1,
      name: "Annu"
    },
    {
      id: 2,
      name: "Samrat"
    },
    {
      id: 3,
      name: "Priya"
    },
    {
      id: 4,
      name: "Tonny"
    },
    {
      id: 5,
      name: "Anjali"
    },
    {
      id: 6,
      name: "Tonisha"
    },
    {
      id: 10,
      name: "Abhi"
    },
    {
      id: 11,
      name: "Mona"
    },
    {
      id: 12,
      name: "Kale"
    },
    {
      id: 15,
      name: "Cherry"
    },
    {
      id: 16,
      name: "Mona"
    },
    {
      id: 17,
      name: "Kale"
    },
    {
      id: 18,
      name: "Cherry"
    }
  ];

return (
  <View>
    <Text style={{fontSize: 32}}>
        Grid with Dynamic Data
    </Text>
     <ScrollView style={{marginBottom: 60}}>
     <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
     {
        users.map((data) => <Text style={styles.item}>{data.name}</Text>)
     }
     </View>
     </ScrollView>
    </View>
)
}

const styles= StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: "blue",
    color: "#fff",
    margin: 5, 
    padding: 5,
    width: 120,
    height: 120
  }
})
export default App;