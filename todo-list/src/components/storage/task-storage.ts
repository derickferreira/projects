import { TaskProperties } from "@/types";
import AsycnStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "task-storage";

async function get(): Promise<TaskProperties[]> {
  const storage = await AsycnStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newTask: TaskProperties) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newTask]);

    await AsycnStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

async function saveAll(tasks: TaskProperties[]) {
  try {
    await AsycnStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error trying to save all tasks", error);
  }
}

export const taskStorage = { get, save, saveAll };
