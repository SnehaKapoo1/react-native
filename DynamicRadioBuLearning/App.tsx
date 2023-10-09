import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [selectRadio, setSelectRadio] = useState(1);
  const skills = [
    {
      id: 1,
      name: "JAVA",
    },
    {
      id: 2,
      name: "C++"
    },
    {
      id: 3,
      name: "PHP", 
    },
    {
      id: 4,
      name: "SQL"
    },
    {
      id: 5,
      name: "IOS"
    }
  ]
  return (
    <View style={styles.main}>
      {
        skills.map((items, index) => <TouchableOpacity
          key={index}
          onPress={() => { setSelectRadio(items.id) }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {
                selectRadio === items.id ? <View style={styles.radioBg}></View> : null
              }
            </View>
            <Text style={styles.radioText}>{items.name}</Text>
          </View>
        </TouchableOpacity>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
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
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    margin: 10
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  radioBg: {
    backgroundColor: "skyblue",
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  }
})
export default App;