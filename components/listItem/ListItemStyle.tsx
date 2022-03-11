import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10%;
  margin-bottom: 2%;
  border-bottom-width: 1px;
  border-bottom-color: #009999;
`;
export const TextView = styled.Text`
  font-size: 18px;
  color: #006666;
  padding-bottom: 10%;
  margin-top: 10%;
  font-weight: bold;
`;
export const Touchable = styled.TouchableOpacity`
  background-color: #009999;
  width: 80px;
  height: 40px;
  border-radius: 10px;
`;

export const TouchableText = styled.Text`
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
