import { Stack } from "expo-router";
import { colors } from "../styles/colors";

export default function Layout() {
  const backgroundColor: string = colors.gray[1000];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
