import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "@/app/styles";
import { colors } from "@/styles/colors";
import { VisualLineSeparator } from "@/components/separator";
import { Search } from "@/components/search";
import { Tasks } from "@/components/tasks";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { useFocusEffect } from "expo-router";
import { TaskProperties } from "@/types";
import { taskStorage } from "@/components/storage/task-storage";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Index() {
  const [selectedTask, setSelectedTask] = useState<TaskProperties | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<TaskProperties[]>([]);
  const [query, setQuery] = useState("");
  const [currentTask, setCurrentTask] = useState<string>("");

  async function removeTask(id: string) {
    const updated = tasks.filter((task) => task.id !== id);

    setTasks(updated);
    await taskStorage.saveAll(updated); // persist the new list
    setShowModal(false);
    setSelectedTask(null);
  }

  function toggleTask(id: string) {
    const updated = tasks.map((task) => {
      console.log(task);
      return task.id === id ? { ...task, done: !task.done } : task;
    });

    setTasks(updated);
    taskStorage.saveAll(updated);
  }

  function openTask(id: string) {
    const found = tasks.find((task) => task.id === id);
    setSelectedTask(found ?? null);
    setShowModal(true);
    setCurrentTask(id);
  }

  function closeModel() {
    setShowModal(false);
    setSelectedTask(null);
  }

  useFocusEffect(() => {
    loadTasks();
  });

  async function loadTasks() {
    try {
      const storedTasks = await taskStorage.get();
      setTasks(storedTasks);
    } catch (error) {
      console.log("Error loading tasks: ", error);
    }
  }

  const filteredTasks = useMemo(() => {
    if (!query.trim()) return tasks;
    const lower = query.toLowerCase();
    return tasks.filter((task) => task.title.toLowerCase().includes(lower));
  }, [query, tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.appLogo}
            source={require("@/assets/todoist.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/add")}>
          <MaterialIcons name="add" size={42} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>
      <VisualLineSeparator />
      <Search value={query} onChange={setQuery} />
      <Tasks task={filteredTasks} onToggle={toggleTask} onOpen={openTask} />
      <Modal animationType="slide" transparent visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTask}>Task</Text>
              <TouchableOpacity onPress={closeModel}>
                <MaterialIcons
                  style={styles.modalIcon}
                  name="close"
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.taskName}>{selectedTask?.title}</Text>
            <TouchableOpacity onPress={() => removeTask(currentTask)}>
              <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
