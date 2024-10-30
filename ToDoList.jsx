import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: { marginVertical: 20 },
  task: { fontSize: 18, paddingVertical: 5 },
});

export default ToDoList;
