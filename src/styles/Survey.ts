import styled from 'styled-components/native';
import { font } from './font';
import { theme } from './theme';

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.View`
  width: 10px;
  height: 20px;
  border-top: 2px solid ${theme.G200};
`;
