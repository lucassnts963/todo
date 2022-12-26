import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Separator } from "../Separator";

export function ListEmpty() {
  return (
    <>
      <Separator />
      <View style={styles.container}>
        <MaterialIcons name="event-note" size={24} color="#808080" />
        <Text style={styles.bold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.light}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </>
  );
}
