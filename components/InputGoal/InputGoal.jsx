import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const InputGoal = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onChangeTextHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const onAddGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  const onCancelHandler = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name Goal"
          style={styles.input}
          onChangeText={onChangeTextHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
});

export default InputGoal;
