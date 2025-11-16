import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { styles } from "./styles";
import { Input } from "@/components/input";
import { VisualLineSeparator } from "@/components/separator";
import { Button } from "@/components/button";
import { taskStorage } from "@/components/storage/task-storage";
import { useState } from "react";

export default function Add() {
  const [name, setName] = useState<string>("");

  async function handleAdd() {
    if (!name) return;

    await taskStorage.save({
      id: new Date().getTime().toString(),
      title: name,
      done: false,
    });

    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={38}
          color={colors.gray[200]}
          onPress={() => router.back()}
        ></MaterialIcons>
        <Text style={styles.title}>New</Text>
      </View>
      <VisualLineSeparator />
      <View style={styles.form}>
        <Input style={styles.input} placeholder="name" onChangeText={setName} />
        <Button style={styles.button} buttonText="Add" onPress={handleAdd} />
      </View>
    </View>
  );
}
