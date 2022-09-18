import AsyncStorage from "@react-native-async-storage/async-storage";
import { storagePOSTS, storageWOOFS } from "../constants/StorageKeys";
import data from "./Data";

export const seedData = async () => {

  const woofs = await getData(storageWOOFS);
  const posts = await getData(storagePOSTS);

  if (woofs == null) {
    await storeData(storageWOOFS, data.woofs);
    console.log("Woofs Data Seeded!");
  }

  if (posts == null) {
    await storeData(storagePOSTS, data.posts);
    console.log("Posts Data Seeded!");
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error reading value from key: ${key}`);
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.error(`Error when storing data { key: ${key}, value: ${value}`);
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Data Cleared.')
}

