import styled from 'styled-components';

export const HeaderBox = styled.div`
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const HeaderContrainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
