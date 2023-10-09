import React from "react";
import {View, Text, TouchableHighlight, StyleSheet} from "react-native";

//Button alternative ->TouchableHighlight and TouchableOpacity

const App = () =>{
 return(
    
   <View style = {styles.main}>
    <TouchableHighlight>
      <Text style = {[styles.button, styles.success]}>Success</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style = {[styles.button, styles.primary]}>Primary</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style = {[styles.button, styles.error]}>Error</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style = {[styles.button, styles.warning]}>Warning</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style = {styles.button}>Button</Text>
    </TouchableHighlight>
   </View>

 );
};

const styles = StyleSheet.create({
main: {
  flex: 1
},
button: {
  backgroundColor: '#bbb',
  color: "white",
  fontSize: 24,
  textAlign: 'center',
  padding: 10,
  margin: 10,
  borderRadius: 10,
  shadowColor: 'red',
  elevation: 20,
  shadowOpacity: 1
},
success: {
  backgroundColor: "green"
},
primary: {
  backgroundColor: "orange"
},
error: {
  backgroundColor: "red"
},
warning: {
  backgroundColor: "gold"
}
})
export default App;
