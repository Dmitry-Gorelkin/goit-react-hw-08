import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../UI/Conteiner/Container.styled';
import { Section } from '../UI/Section/Section.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { HeaderBox, HeaderContrainer } from './Header.styled';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <HeaderBox>
      <Container>
        <Section>
          <HeaderContrainer>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </HeaderContrainer>
        </Section>
      </Container>
    </HeaderBox>
  );
};
