import React from 'react';
import {Item} from '../todos/itemInterface/Item';
import {deleteItem} from '../todos/DeleteItems';
import {TextView, Container, Touchable, TouchableText} from './ListItemStyle';

interface IProps {
  item: Item;
}

const ListItem: React.FC<IProps> = ({item}) => (
  <Container>
    <TextView>{item.name}</TextView>
    <Touchable onPress={() => deleteItem(item)}>
      <TouchableText>Delete</TouchableText>
    </Touchable>
  </Container>
);

export default ListItem;
