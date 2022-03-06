import styled from 'styled-components';

export const StarshipPageWrapper = styled.div`
  padding: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.bg};
`;

export const StarshipPageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.a`
  color: ${(props) => props.theme.colors.accent2};
  opacity: 0.7;
`;

export const StarshipName = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  text-align: center;
  margin-bottom: ${(props) => props.theme.space.xs};
  padding-bottom: ${(props) => props.theme.space.xs};
  border-bottom: 2px solid ${(props) => props.theme.colors.mainBg};
`;

export const StartshipInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
  padding: 10px;
`;

export const StarshipInfoLabel = styled.span`
  opacity: 0.7;
  margin-right: 5px;
`;
