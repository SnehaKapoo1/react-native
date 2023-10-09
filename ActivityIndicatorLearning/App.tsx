import React, { useState } from "react";
import {View, ActivityIndicator, StyleSheet, Button} from "react-native";

const App= () => {

  const [show, setShow] = useState(false);

  const displayLoader =() =>{
    setShow(true);

    setTimeout(() => {
      setShow(false)
    }, 2000)

    //api calling in 2sec
  }
return(
  <View style = {styles.main}>
    <ActivityIndicator size = {40} color = "green" animating = {show}/>
    {/* second way */}
    {
      show ? <ActivityIndicator size = {60} color = "red" /> : null
    }
    <Button title="Activity Indicator" onPress={displayLoader}/>
  </View>
)
}

const styles = StyleSheet.create({
main: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
}
})

export default App;