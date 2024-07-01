import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45px;

  padding: 10px;

  cursor: pointer;

  text-transform: uppercase;

  border: none;
  border-radius: 4px;

  background-color: ${p => p.theme.colors.btn};

  color: ${p => p.theme.colors.textWhite};

  &:hover {
    background-color: ${p => p.theme.colors.bthHover};
  }
`;
