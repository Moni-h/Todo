/* eslint-disable no-alert */
import React from 'react';
import {addItem} from '../todos/AddItems';
import {viewState} from '../../App';
import {Container, TextView, Input, Touchable, AddText} from './EditViewStyle';

interface IProps {
  setViewState: React.Dispatch<React.SetStateAction<viewState>>;
}

const EditView: React.FC<IProps> = ({setViewState}) => {
  const [itemName, setItemName] = React.useState<string>('');

  const onSubmit = async () => {
    if (itemName.trim() !== '') {
      await addItem(itemName);
      setViewState('default');
    } else {
      alert('Field is empty!');
    }
  };

  return (
    <Container>
      <TextView>Add a new Item</TextView>
      <Input
        value={itemName}
        placeholder="Title"
        onChangeText={setItemName}
        placeholderTextColor="#006666"
      />
      <Touchable onPress={onSubmit}>
        <AddText>ADD</AddText>
      </Touchable>
    </Container>
  );
};

export default EditView;
