import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useState } from "react";

interface Props {
  onAddNewTask: (value: string) => void;
}

export function Form({ onAddNewTask }: Props) {
  const [description, setDescription] = useState("");

  function handleAddNewTask() {
    onAddNewTask(description);
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <Feather name="plus-circle" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
