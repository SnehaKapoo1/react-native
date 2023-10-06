import React, {useState, useEffect} from "react";
import {View, Text, Button} from "react-native";
//import User from "./components/Users";

const App = () =>{

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  
  // useEffect(() => {
  //   console.warn("Hello I am counter of count" + " : " + count)
  // }, ([count]))

  // useEffect(() => {
  //   console.warn("Hello I am Data" + " : " + data)
  // }, ([data]))
  
  return(
     <View>
      <Text style={{fontSize: 30, marginBottom: 5}}>
        {data} useEffect Hook {count}
      </Text>
      <Button title = "Update Counter" onPress={() => setCount(count + 1)} />
      <View style={{marginTop: 10, padding: 5}}>
      <Button title = "Update Data" onPress={() => setData(data + 1)} />
      </View>
      <Users info = {{count, data}} />
     </View>
  );

};

const Users=(props: any) => {
 
  //console.warn(props.info);
  
  useEffect(() =>{
    console.warn("print when data is updated");
  }, [props.info.data]);
  
  return(
      <View>
          <Text style={{fontSize: 30, marginTop: 5, color: "orange"}}>
              User Component {props.info.data}
          </Text>
      </View>
  )
}


export default App;