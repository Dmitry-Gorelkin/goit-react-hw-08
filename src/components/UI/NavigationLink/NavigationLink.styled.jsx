import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 2px 5px;

  text-decoration: none;
  color: ${p => p.theme.colors.textWhite};

  cursor: pointer;

  @media screen and (min-width: 425px) {
    padding: 5px 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 15px;
  }

  @media screen and (min-width: 1200px) {
  }

  &.active {
    box-shadow: 0px 2px 0px 0px ${p => p.theme.colors.accent};
  }

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
