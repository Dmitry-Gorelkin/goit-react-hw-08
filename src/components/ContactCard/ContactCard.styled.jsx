import styled from 'styled-components';

export const ContactCardContrainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10px;

  border: 1px ridge ${p => p.theme.colors.backgroundSecondary};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const ContactCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactCardName = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const ContactCardNumber = styled.p`
  color: ${p => p.theme.colors.textSecondary};
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
