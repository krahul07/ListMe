import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({addItem}) => {
  const [getInput, setInput] = useState("");

  return (
    <View style={styles.addItemView}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Item"
        onChangeText={(value) => setInput(value)}
      />
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => { console.log(); addItem(getInput)}}
      >
        <Text style={styles.btn}> ADD </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

styles = StyleSheet.create({
  addItemView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 50,
    width: "75%",
    fontSize: 22,
    color: "black",
    padding: 10,
  },
  btnView: {
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "orange",
  },
  btn: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    
  },
});
