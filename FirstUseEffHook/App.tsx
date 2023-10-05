import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("hello");
  },[]) // {, []} => useEffect in mounting phase
return(
  <View>
    <Text>
      Life Cycle with Use effect {count}
    </Text>
    <Button title = "UpdateCount" onPress={() => setCount(count + 1)} />
  </View>
)
}

export default App;