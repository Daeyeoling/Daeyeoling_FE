import styled from 'styled-components/native';
import { font } from './font';
import { theme } from './theme';

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 24px;
  padding-bottom: 40px;
`;

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`;

export const TextLayout = styled.View`
  border-top: 2px solid ${theme.G200};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  ${font.Headline}
`;

export const SubTitle = styled.Text`
  ${font.Body3}
`;

export const InputLayout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
`;

export const InputTitle = styled.Text`
  ${font.Body3}
`;

export const TextInputLayout = styled.View`
  width: 100%;
  height: 42px;
  border: 1px solid ${theme.Gray2};
  padding: 11px;
  border-radius: 5px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
`;

export const RadioRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RadioOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const RadioCircle = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid ${theme.Gray2};
  margin-right: 6px;
  ${({ selected }: any) =>
		selected &&
		`
    background-color: ${theme.G100};
    border-color: ${theme.G400};
  `}
`;

export const RadioLabel = styled.Text`
  ${font.Body3}
  color: ${theme.Black};
`;

export const ButtonLayout = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  background-color: ${theme.G400};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  ${font.Btn2}
  color: ${theme.White};
`;
