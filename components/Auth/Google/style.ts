import styled from 'styled-components/native';
import { font } from '@/src/styles/font';
import { theme } from '@/src/styles/theme';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 18px 16px;
  border: 1px solid ${theme.Gray2};
  border-radius: 12px;
`;

export const LogoWrapper = styled.View`
  position: absolute;
  left: 16px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  ${font.Btn1};
  color: ${theme.Black};
`;
