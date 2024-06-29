import styled from 'styled-components';
import { CiCircleRemove } from 'react-icons/ci';

export const ContactFormContrainer = styled.div`
  display: block;
  width: 90vw;

  padding: 10px;

  position: relative;

  overflow: 'auto';

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    padding: 25px;
  }
`;

export const ContactFormCloseIcon = styled(CiCircleRemove)`
  display: block;
  width: 25px;
  height: 25px;

  position: absolute;

  top: 5px;
  right: 5px;

  color: ${p => p.theme.colors.textSecondary};

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;

    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 35px;
    height: 35px;
  }

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
