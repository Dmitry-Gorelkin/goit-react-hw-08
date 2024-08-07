import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Conteiner/Container.styled';
import { Section } from './UI/Section/Section.styled';
import { AppBar } from './AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectUserIsRefreshing } from '../redux/auth/selectors';
import { LoaderPuff } from './UI/LoaderPuff/LoaderPuff';

export const Layout = () => {
  const isRefreshing = useSelector(selectUserIsRefreshing);

  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <AppBar />
      <Container>
        <Section>
          <Suspense fallback={null}>{isRefreshing ? <LoaderPuff /> : <Outlet />}</Suspense>
        </Section>
      </Container>
    </>
  );
};
