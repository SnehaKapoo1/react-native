import React from "react";
import {View, Text, StyleSheet} from "react-native";

function App(){

return(
  <View>
     <Text style={{fontSize: 31}}>Grid with Dynamic Data</Text>
     <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      <Text style={styles.item}>Sneha</Text>
      
     </View>
  </View>
);
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: "blue",
    color: "#fff",
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: "center"
  }
})

export default App;