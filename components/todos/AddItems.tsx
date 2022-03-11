import AsyncStorage from '@react-native-community/async-storage';
import uuidv4 from 'uuid/v4';

const ITEMS = 'ITEMS';

export const addItem = async (name: string) => {
  const listItem: Item = {name: name, id: uuidv4()};
  const itemsFromStorage: Item[] = JSON.parse(
    await AsyncStorage.getItem(ITEMS),
  );
  const arr = itemsFromStorage || [];
  await AsyncStorage.setItem(ITEMS, JSON.stringify([...arr, listItem]));
};
