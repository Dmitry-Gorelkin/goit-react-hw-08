import styled from 'styled-components';

export const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  padding: 2px;

  border-radius: 4px;

  cursor: pointer;

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.btn};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1200px) {
  }

  &:hover {
    background-color: ${p => p.theme.colors.bthHover};
  }
`;
