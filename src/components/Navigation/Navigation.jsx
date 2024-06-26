import { NavigationContrainer } from '../UI/NavigationContrainer/NavigationContrainer.styled';
import { NavigationLink } from '../UI/NavigationLink/NavigationLink.styled';

export const Navigation = () => {
  return (
    <NavigationContrainer>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/contacts">Contacts</NavigationLink>
    </NavigationContrainer>
  );
};
