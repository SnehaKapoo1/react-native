import React, { useState } from "react";
import {Button, Text, View} from "react-native";

const App= () => {

  const [show, setShow] = useState(false);

  return(
  <View>
    <Text style={{fontSize: 30}}>
      Toogle show and hide
    </Text>
    {/* <View>
    <Button title="Show component" onPress={() => {setShow(!show)}}/>
    </View> */}
    {/* <Button title="Hide component" onPress={() => {setShow(false)}}/> */}
    <Button title="Toggle component" onPress={() => {setShow(!show)}}/>
    {
      show ? <ToggleComponent /> : null
    }
  </View>
  );
};

const ToggleComponent = () =>{
  return(
    <View>
      <Text style = {{fontSize: 30, color: "green"}}>
        Toggle Component
      </Text>
    </View>
  )
}

export default App;