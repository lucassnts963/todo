import { StyleSheet, View } from "react-native";

export function Separator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    marginHorizontal: 24,
  },
});
