import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useState } from "react";

export interface ToDo {
  id: string;
  description: string;
  hasChecked: boolean;
}

interface Props {
  data: ToDo;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ListItem({ data, onCheck, onDelete }: Props) {
  const { hasChecked, description, id } = data;

  function handleCheckTask() {
    onCheck(id);
  }

  function handleDeleteTask() {
    onDelete(id);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCheckTask}>
        {!hasChecked ? (
          <Feather name="circle" size={24} color="#4EA8DE" />
        ) : (
          <Feather name="check-circle" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <Text
        style={[styles.description, hasChecked ? styles.checked : null]}
        numberOfLines={2}
      >
        {description}
      </Text>
      <TouchableOpacity onPress={handleDeleteTask}>
        <Ionicons name="md-trash-outline" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
