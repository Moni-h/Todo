import AsyncStorage from '@react-native-community/async-storage';
import uuidv4 from 'uuid/v4';

const ITEMS = 'ITEMS';

export const deleteItem = async (item: Item) => {
  const itemsFromStorage: Item[] = JSON.parse(
    await AsyncStorage.getItem(ITEMS),
  );
  const filteredItems = itemsFromStorage.filter(
    selectedItem => selectedItem.id !== item.id,
  );
  await AsyncStorage.setItem(ITEMS, JSON.stringify(filteredItems));
};
