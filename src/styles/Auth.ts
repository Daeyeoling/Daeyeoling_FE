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
  align-items: center;
  padding: 158px 24px 40px 24px;
`;

export const LogoComponents = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.Image`
  width: 197px;
`;

export const LogoText = styled.Text`
  ${font.Logo}
  color: ${theme.G500};
  text-align: center;
`;

export const OAuthButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
