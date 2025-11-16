import { TaskProperties } from "@/types";
import { FlatList } from "react-native";
import { Task } from "../task";
import { styles } from "./styles";

interface Prop {
  task: TaskProperties[];
  onToggle: (id: string) => void;
  onOpen: (id: string) => void;
}

export const Tasks = ({ task, onToggle, onOpen }: Prop) => {
  return (
    <FlatList
      data={task}
      keyExtractor={(item) => item.id}
      renderItem={(task) => (
        <Task task={task.item} onToggle={onToggle} onOpen={onOpen} />
      )}
      style={styles.container}
    />
  );
};
