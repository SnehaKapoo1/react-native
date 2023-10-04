import React from "react";
import {View, Text} from "react-native";

const UserData = (props) => {
    const item = props.item;
    return(
  <View style ={styles.box}>
              <Text style= {styles.item}>{item.name}</Text>
              <Text style = {styles.item}>{item.email}</Text>
            </View>
    );
  };

  const styles = StyleSheet.create({
    item: {
       fontSize: 24,
       color: "orange",
       flex: 1,
       margin: 2,
       backgroundColor: "green"
    },
    box: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor : "orange",
      marginBottom: 10
    }
  })

export default UserData;