import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

// ******** Interview Questions**********
// onLongPress event ko invoke hone mai kitna delay lagta hai
// ans -> 500 milisecond

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable 
      onPress={() => {console.warn("normal press")}}
      onLongPress={() => console.warn("Long press")}
      onPressIn={() => console.warn("Press In")}
      // onPressOut={() => console.warn("Press out")}
      
      >
        <Text style={styles.pressableBtn}>Press me</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: "skyblue",
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    shadowColor: "orange",
    elevtion: 5
  }
})
export default App;