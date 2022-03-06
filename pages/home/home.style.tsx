import styled from 'styled-components';

export const HomeStyle = styled.div``;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarshipList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.space.xs};

  ${(props) => props.theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }

  ${(props) => props.theme.mediaQueries.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StarshipListItem = styled.li`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StarthipLink = styled.a`
  display: block;
  font-size: ${(props) => props.theme.fontSize.size2};
`;

export const StarshipCrew = styled.div`
  background-color: ${(props) => props.theme.colors.mainBg};
  opacity: 0.5;
  padding: 4px;
  display: inline-block;
  width: max-content;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.size0};
  color: ${(props) => props.theme.colors.textLight};
`;

export const StarshipModel = styled.a`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.size1};
  line-height: 1.4;
  color: ${(props) => props.theme.colors.textLight};
`;
