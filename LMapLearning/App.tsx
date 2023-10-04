import React from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";

// first list with map
//second adding ScrollView

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
    }
  ];

return(
  <View>
    <Text style= {{fontSize: 25}}>List with Map Function</Text>
    <ScrollView style= {{marginBottom: 60}}>
    {
      users.map((data) => <Text style= {styles.item}>{data.name}</Text>)
    }
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: "#fff",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "blue"
  }
})
export default App;