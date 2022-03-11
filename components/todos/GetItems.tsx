import AsyncStorage from '@react-native-community/async-storage';
import uuidv4 from 'uuid/v4';

type getItemsType = () => Promise<Array<Item>>;
const ITEMS = 'ITEMS';

export const getItems: getItemsType = async () => {
  const arr: Item[] = JSON.parse(await AsyncStorage.getItem(ITEMS));
  return arr;
};
