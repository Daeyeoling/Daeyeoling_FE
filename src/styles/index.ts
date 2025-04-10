import styled from 'styled-components/native';
import { font } from './font';
import { theme } from './theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Label = styled.Text`
  color: black;
`;

export const LogoImg = styled.Image`
  width: 197px;
`;
export const LogoText = styled.Text`
  ${font.Logo}
  ${theme.G500}
`;
