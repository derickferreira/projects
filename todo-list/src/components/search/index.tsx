import {
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { TaskProperties } from "@/types";
import { taskStorage } from "../storage/task-storage";

type SearchProps = {
  value: string;
  onChange: (text: string) => void;
};

export const Search = ({value, onChange}: SearchProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="search task name"
        />
        <TouchableOpacity style={styles.button}>
          <EvilIcons
            style={styles.icon}
            name="search"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
