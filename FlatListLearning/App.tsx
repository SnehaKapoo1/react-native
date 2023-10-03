import React from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';

const users=[
  {
    id: 1,
    name: "Ajay"
  },

  {
    id: 2,
    name: "Arjun"
  },

  {
    id: 3,
    name: "Abhi"
  },

  {
    id: 4,
    name: "Aashi"
  }
]

function App() {
  return(
    <View>
      <Text>FlatList Learning</Text>
      <FlatList 
      data={users}
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      //keyExtractor={(item) => item.id} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: "#fff",
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    margin: 10
  }
})

export default App;