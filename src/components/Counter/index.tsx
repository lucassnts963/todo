import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  created: number;
  completed: number;
}

export function Counter({ created, completed }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.createText}>Criadas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{created}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.completeText}>Concluídas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{completed}</Text>
        </View>
      </View>
    </View>
  );
}
