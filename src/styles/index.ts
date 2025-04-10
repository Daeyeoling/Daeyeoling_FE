import styled from 'styled-components/native';
import { font } from './font';
import { theme } from './theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  background-color: #fff;
  position: relative;
  padding: 20px 24px;
  margin-top: 4px;
`;

export const HeaderButton = styled.Pressable`
  margin-left: 20px;
`;

export const HeaderButtonText = styled.Text`
  font-size: 14px;
  color: black;
`;

export const HeaderRightContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-right: 18px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  padding-top: 16px;
`;

export const ItemContent = styled.View`
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  padding: 16px 0;
`;

export const Title = styled.Text`
  ${font.Body2}
  color: ${theme.Black};
`;

export const SubInfo = styled.Text`
  ${font.Caption2}
  color: ${theme.Gray4};
  margin: 4px 0;
`;

export const Price = styled.Text`
  ${font.Btn2}
  color: ${theme.G400};
`;

export const Status = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
`;

export const StatusText = styled.Text`
  margin-left: 4px;
  color: ${theme.Gray4};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #eee;
  margin: 0 16px;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: ${theme.G400};
  color: ${theme.White};
  width: 56px;
  height: 56px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;
