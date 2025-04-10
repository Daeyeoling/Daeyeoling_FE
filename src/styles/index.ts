import styled from 'styled-components/native';
import { font } from './font';
import { theme } from './theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0 24px;
`;

export const Label = styled.Text`
  color: black;
`;

export const LogoImg = styled.Image`
  width: 197px;
`;
export const LogoText = styled.Text`
  ${font.Logo}
  color: ${theme.G500};
`;
