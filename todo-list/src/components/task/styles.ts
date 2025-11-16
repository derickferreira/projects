import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.gray[500],
  },
  taskTitle: {
    flex: 1,
    color: colors.gray[100],
    fontWeight: 400,
  },
  iconCheckBox: {
    color: colors.gray[100],
    paddingHorizontal: 10,
  },
  iconDots: {
    color: colors.gray[100],
    fontSize: 16,
    paddingHorizontal: 10,
  },
  done: {
    backgroundColor: colors.gray[600],
    color: colors.gray[800],
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.gray[500],
  },
});
