import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Conteiner/Container.styled';
import { Section } from './UI/Section/Section.styled';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <Header />
      <Container>
        <Section>
          <Suspense>
            <Outlet />
          </Suspense>
        </Section>
      </Container>
    </>
  );
};
