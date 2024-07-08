import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../UI/Conteiner/Container.styled';
import { Section } from '../UI/Section/Section.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AppBarBox, AppBarContrainer } from './AppBar.styled';
import { selectUserIsLoggedIn, selectUserIsRefreshing } from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);

  return (
    <AppBarBox>
      <Container>
        <Section>
          <AppBarContrainer>
            <Navigation />
            {!isRefreshing && (isLoggedIn ? <UserMenu /> : <AuthNav />)}
          </AppBarContrainer>
        </Section>
      </Container>
    </AppBarBox>
  );
};
