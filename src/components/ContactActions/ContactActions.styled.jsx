import styled from 'styled-components';

export const ContactActionsContrainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  gap: 5vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: start;
  }
`;
