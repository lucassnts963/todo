import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#1E6F9F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
