import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";

const App = () => {

  const [showModal, setShowModal] = useState(false);
   
  return (
    <View style={styles.main}>
      <Modal 
      transparent={true}
      visible = {showModal}
      animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextView}>Button Clicked Successfully</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: "white",
    padding: 28,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,

  },
  modalTextView: {
    fontSize: 20,
    marginBottom: 10
  }
})

export default App;