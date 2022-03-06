import React from 'react';
import styled from 'styled-components';
import { MainHeader } from './MainHeader';

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  max-width: 900px;
  margin: auto;
  padding: ${(props) => props.theme.space.xs};
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.text};
`;

export const Layout: React.FC = ({ children }) => (
  <LayoutRoot>
    <MainHeader />
    {children}
  </LayoutRoot>
);
