import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.blockStyle}
      key={props.obj.id}
      onPress={() => console.log("An update feature is coming soon")}
      activeOpacity={0.5}
    >
      <Text style={styles.itmStyle}>{props.obj.item}</Text>
      <TouchableOpacity
        onPress={() => props.deleteItem(props.obj.id)}
        activeOpacity={0.5}
      >
        <Text style={styles.btnStyle}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  blockStyle: {
    flex: 1,
    flexDirection: "row",
  },
  itmStyle: {
    width: "80%",
    color: "blue",
    padding: 15,
    fontSize: 30,
    backgroundColor: "lightyellow",
    borderBottomColor: "#eca",
    borderBottomWidth: 1,
  },
  btnStyle: {
    marginLeft: 0,
    marginRight: 0,
    fontSize: 30,
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25,
    color: "red",
    backgroundColor: "lightyellow",
    borderColor: "#eca",
    borderWidth: 1,
  },
});
