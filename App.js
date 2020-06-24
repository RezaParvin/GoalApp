import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem/GoalItem";
import InputGoal from "./components/InputGoal/InputGoal";

export default function App() {
  const [userGoals, setUserGoals] = useState([]);
  const [showViewNewGoal, setShowViewNewGoal] = useState(false);

  const onAddGoalUser = (enteredGoal) => {
    setUserGoals((userGoals) => [
      ...userGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setShowViewNewGoal(false);
  };

  const onCancelViewNewGoal = () => {
    setShowViewNewGoal(false);
  };

  const onDeleteGoalHandler = (id) => {
    setUserGoals((userGoals) => userGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.screen}>
      <InputGoal
        onAddGoal={onAddGoalUser}
        visible={showViewNewGoal}
        onCancel={onCancelViewNewGoal}
      />
      <Button
        title="Add New Goal"
        onPress={() => {
          setShowViewNewGoal(true);
        }}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={userGoals}
        renderItem={({ item }) => (
          <GoalItem
            title={item.value}
            id={item.id}
            onDelete={onDeleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
