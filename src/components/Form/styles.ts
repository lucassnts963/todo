import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    position: "absolute",
    top: 146,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  button: {
    marginLeft: 4,
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
});
