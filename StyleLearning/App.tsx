import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExStyles from './style';

function App(){
   return (
      <View>
        {/* InLine styling */}
           <Text style={{fontSize: 20, color: 'black', backgroundColor: 'green'}}>Style in React Native</Text>
           <Text style={{fontSize: 20, color: 'black', backgroundColor: 'green'}}>Style in React Native</Text>
           <Text style={{fontSize: 20, color: 'black', backgroundColor: 'green'}}>Style in React Native</Text>
           <Text style={{fontSize: 20, color: 'black', backgroundColor: 'green'}}>Style in React Native</Text>

           {/* Internal Styling */}
           <Text style={styles.textBox}>Style in React Native</Text>
           <Text style={styles.textBox}>Style in React Native</Text>
           <Text style={styles.textBox}>Style in React Native</Text>

           {/* External Styling */}
           <Text style={ExStyles.textBox}>Style in React Native</Text>
           <Text style={ExStyles.textBox}>Style in React Native</Text>
           <Text style={ExStyles.textBox}>Style in React Native</Text>

           {/* Add multiple styling */}
           <Text style={[styles.textBox, ExStyles.textBox, {marginTop: 20}]}>Style in React Native</Text>
      </View>
   );
}
// internal styling
const styles = StyleSheet.create({
  textBox: {
    color: "red",
    fontSize: 25,
    backgroundColor: "black",
    padding: 5,
    marginBottom: 10,
    marginTop: 2,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: "yellow",
    borderWidth: 2
  }
})

export default App;