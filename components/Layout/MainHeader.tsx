/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  margin-bottom: ${(props) => props.theme.space.sm};
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.size4};
  font-weight: var(--fontWeight-bold);
  text-transform: uppercase;
  margin: auto;
  width: min-content;
  font-weight: bold;
  border-radius: 2px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  text-align: center;
  display: inline-block;
`;

export const MainHeader: React.FC = () => (
  <Header>
    <Link href="/">
      <a>
        <Logo>Starships</Logo>
      </a>
    </Link>
  </Header>
);
