import styled from 'styled-components';

export const AppBarBox = styled.div`
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const AppBarContrainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
