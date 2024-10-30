import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ToDoForm = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput(""); // Clear the input after adding
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
  },
});

export default ToDoForm;
