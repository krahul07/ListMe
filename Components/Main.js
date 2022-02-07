import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView, Alert } from "react-native";
import ListItem from "./ListItem.js";
import AddItem from "./AddItem.js";

const Main = () => {
  const [items, setItems] = useState([{ id: 0, item: "Sample Item" }]);
  const [getId, setId] = useState(0);

  const addItem = (item) => {
    if (!item) {
      Alert.alert("Error", "Please Enter Item Name", [
        {
          text: "Ok",
          onPress: () => {},
        },
      ]);
    } else {
      let currId = getId + 1;
      setId(currId);
      setItems((prevState) => {
        prevState.push({ id: currId, item: item });
        return prevState;
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      var prevItems = prevItems.filter((item) => item.id != id);
      return prevItems;
    });
  };

  const getHeader = () => {
    return (
      <View style={{ marginBottom: 20 }}>
        <AddItem addItem={addItem}/>
      </View>
    );
  }

  return (
    <View style={styles.addView}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem obj={item} deleteItem={deleteItem}/>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={getHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addView: {
    flex: 1,
  },
});

export default Main;
