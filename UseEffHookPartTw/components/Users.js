import React, {useState, useEffect} from "react";
import {View, Text, Button} from "react-native";

const Users=(props) => {

    return(
        <View>
            <Text style={{fontSize: 30, marginTop: 5, color: "orange"}}>
                User Component {props.info.data}
            </Text>
        </View>
    )
}

export default Users;