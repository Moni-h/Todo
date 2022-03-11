import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const TextView = styled.Text`
  font-size: 24px;
  color: #006666;
  padding-bottom: 10%;
  margin-top: 10%;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-color: #006666;
  width: 90%;
  border-width: 2px;
  border-radius: 10px;
  font-size: 18px;
  color: #004d4d;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: #009999;
  width: 50%;
  height: 50px;
  border-radius: 10px;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
`;

export const AddText = styled.Text`
  font-size: 18px;
  color: #fff;
  padding-bottom: 10%;
  margin-top: 10%;
  align-items: center;
  text-align: center;
  height: 50px;
  padding-top: 1%;
  font-weight: bold;
`;
