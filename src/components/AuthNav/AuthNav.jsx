import { NavigationContrainer } from '../UI/NavigationContrainer/NavigationContrainer.styled';
import { NavigationLink } from '../UI/NavigationLink/NavigationLink.styled';

export const AuthNav = () => {
  return (
    <NavigationContrainer>
      <NavigationLink to="register">Registration</NavigationLink>
      <NavigationLink to="login">Log In</NavigationLink>
    </NavigationContrainer>
  );
};
