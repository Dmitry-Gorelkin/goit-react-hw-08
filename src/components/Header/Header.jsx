import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../UI/Conteiner/Container.styled';
import { Section } from '../UI/Section/Section.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { HeaderBox, HeaderContrainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Section>
          <HeaderContrainer>
            <Navigation />
            <AuthNav />
            {/* <UserMenu /> */}
          </HeaderContrainer>
        </Section>
      </Container>
    </HeaderBox>
  );
};
