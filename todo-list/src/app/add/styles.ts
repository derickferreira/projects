import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 17,
  },
  title: {
    color: colors.gray[100],
    fontSize: 28,
    fontWeight: 500,
  },
  form: {
    marginTop: 30,
    gap: 20,
    alignItems: "center"
  },
  input: {
    backgroundColor: colors.gray[900],
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 7,
    color: colors.gray[100]
  },
  button: {
    backgroundColor: colors.gray[100],
    paddingVertical: 10,
    width: 60,
    alignItems: "center",
    borderRadius: 8
  },
});
