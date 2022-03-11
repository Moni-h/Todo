import React from 'react';
import DefaultView from './components/defaultView/DefaultView';
import EditView from './components/editView/EditView';
import {Touchable, AddText} from './AppStyle';
import {Container, TextView} from './AppStyle';

export type viewState = 'default' | 'edit';

const App = () => {
  const [viewState, setViewState] = React.useState<viewState>('default');

  const handleNewPress = () => setViewState('edit');
  const handleCancelPress = () => setViewState('default');

  return (
    <Container>
      {viewState === 'default' ? (
        <>
          <TextView>Todo App</TextView>
          <Touchable onPress={handleNewPress}>
            <AddText>Add new Todo</AddText>
          </Touchable>
          <DefaultView />
        </>
      ) : (
        <>
          <EditView setViewState={handleCancelPress} />
          <Touchable onPress={handleCancelPress}>
            <AddText> Show Todo List</AddText>
          </Touchable>
        </>
      )}
    </Container>
  );
};

export default App;
