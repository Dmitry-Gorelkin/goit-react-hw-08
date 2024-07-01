import styled from 'styled-components';
import { CiRead } from 'react-icons/ci';

export const FormContrainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 5vw;

  @media screen and (min-width: 768px) {
    gap: 30px;

    width: 400px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  gap: 10px;

  text-transform: uppercase;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;

  outline: none;

  color: ${p => p.theme.colors.textSecondary};

  padding: 10px;
  padding-right: 30px;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 4px;

  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const FormInputContrainer = styled.div`
  display: block;
  position: relative;
`;

export const FormInputIconVisibilityPassword = styled(CiRead)`
  display: block;
  width: 25px;
  height: 25px;

  position: absolute;

  cursor: pointer;

  color: ${p => (p.visible ? p.theme.colors.accent : p.theme.colors.textSecondary)};

  top: 50%;
  transform: translate(-50%, -50%);

  right: -5px;
`;
