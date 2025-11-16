import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[300],
    backgroundColor: colors.gray[800],
    marginBottom: 20
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    color: colors.gray[100],
    backgroundColor: "transparent"
  },
  button: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: colors.gray[100],
  },
});
