import React, {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const App =() => {
<View style = {styles.main}>
<TouchableOpacity>
    <View>
      <View style = {styles.radio}></View>
      <Text style = {styles.radioText}>Radio 1</Text>
    </View>
  </TouchableOpacity>
</View>
}

const styles = StyleSheet.create({
  main :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 20
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    flex: 1
  }
})
export default App;
