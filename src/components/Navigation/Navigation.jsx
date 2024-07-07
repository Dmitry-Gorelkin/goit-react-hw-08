import { useSelector } from 'react-redux';
import { NavigationContrainer } from '../UI/NavigationContrainer/NavigationContrainer.styled';
import { NavigationLink } from '../UI/NavigationLink/NavigationLink.styled';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <NavigationContrainer>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="contacts">Contacts</NavigationLink>}
    </NavigationContrainer>
  );
};
