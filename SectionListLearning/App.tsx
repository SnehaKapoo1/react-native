import React from "react";
import {View, Text, StyleSheet, SectionList} from "react-native";

const App =() => {

  const users = [
    {
      id: 1,
      name: "Sneha",
      data: ["php", "react js", "angular"]
    },
    {
      id: 2,
      name: "neha",
      data: ["python", "java", "angular"]
    },
    {
      id: 3,
      name: "nehal",
      data: [".net", "c++", "html"]
    }
  ]

  return(
   <View>
    <Text style={{fontSize: 31}}>Hello its SectionList</Text>
    <SectionList 
    sections={users}
    renderItem={({item}) => <Text style= {{fontSize: 20, marginLeft: 20}}>{item}</Text> }
    renderSectionHeader={({section: {name}}) => <Text style={{fontSize: 25, fontWeight: "bold", color: "red"}}>{name}</Text>}/>
   </View>
  )
}

export default App;