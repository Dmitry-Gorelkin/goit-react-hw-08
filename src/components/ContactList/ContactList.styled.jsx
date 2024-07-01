import styled from 'styled-components';

export const ContactListContrainer = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 730px;

    gap: 20px;
  }
`;
