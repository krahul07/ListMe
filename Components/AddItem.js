import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const AddItem = ({ addItem }) => {
  const [getInput, setInput] = useState("");

  return (
    <View style={styles.addItemView}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Item"
        onChangeText={(value) => setInput(value)}
        numberOfLines= {2}
      />
      <View style={styles.btnView}>
        <Button
          title="Add"
          onPress={() => {
            addItem(getInput);
          }}
          color="green"
        />
      </View>
    </View>
  );
};

export default AddItem;

styles = StyleSheet.create({
  addItemView: {
    flex: 1 / 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  textInput: {
    flex: 3 / 4,
    marginLeft: 10,
    borderBottomWidth: 1,
    fontSize: 22,
    color: "black",
  },
  btnView: {
    flex: 1 / 4,
    margin: 5,
    marginTop: 10,
  },
});
