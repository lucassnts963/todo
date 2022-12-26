import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 55,
    marginHorizontal: 24,
    marginBottom: 20,
  },
  content: {
    flexDirection: "row",
  },
  createText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  completeText: {
    color: "#8284FA",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  count: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#333333",
    borderRadius: 999,
    marginLeft: 8,
  },
  countText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
});
