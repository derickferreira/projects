import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./styles";
import { TaskProperties } from "@/types";

interface Props {
  task: TaskProperties;
  onToggle: (id: string) => void;
  onOpen: (id: string) => void;
}

export const Task = ({ task, onOpen, onToggle }: Props) => {
  return (
    <View {...(task.done ? styles.done : styles.container)}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <MaterialIcons
          style={styles.iconCheckBox}
          name={task.done ? "check-box" : "check-box-outline-blank"}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onOpen(task.id)}>
        <Entypo
          style={styles.iconDots}
          name="dots-three-vertical"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};
