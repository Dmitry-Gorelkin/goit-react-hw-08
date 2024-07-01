import styled from 'styled-components';

export const ContactCardContrainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10px;

  border: 1px ridge ${p => p.theme.colors.backgroundSecondary};
  border-radius: 8px;
  /* border-color: ${p => p.theme.colors.backgroundSecondary}; */
  /* border-style: solid; */

  /* box-shadow: 1px 1px 2px 2px ${p => p.theme.colors.backgroundSecondary}; */
`;

export const ContactCardBtn = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }

  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;
