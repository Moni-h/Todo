import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {Item} from '../todos/itemInterface/Items';
import {getItems} from '../todos/GetItems';
import ListItem from '../listItem/ListItem';
import {TextView, Container} from './DefaultViewStyle';

const DefaultView: React.FC = () => {
  const [data, setData] = React.useState<Array<Item>>([]);

  useEffect(() => {
    let isMounted = true;
    getItems().then((items: Item[]) => {
      if (isMounted) {
        setData(items);
      }
    });

    return () => (isMounted = false);
  }, [data]);

  return (
    <Container>
      {data != null && data.length !== 0 && <TextView>Todo List</TextView>}

      <FlatList
        data={data}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default DefaultView;
