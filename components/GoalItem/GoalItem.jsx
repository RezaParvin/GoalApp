import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ id,title, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this,id)}>
      <View style={styles.goalItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "pink",
    padding:10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default GoalItem;
