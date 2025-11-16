import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  appLogo: {
    height: 70,
    width: 70,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalTask: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[300],
  },
  modalIcon: {
    color: colors.gray[300],
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 32,
    justifyContent: "space-between",
  },
  taskName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[300],
  },
});
