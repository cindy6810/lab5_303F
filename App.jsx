/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState([
    "Buy groceries",
    "Complete assignment",
    "Walk the dog",
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default App;
