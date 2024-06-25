import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Conteiner/Container.styled';
import { Section } from './UI/Section/Section.styled';

export const Layout = () => {
  return (
    <>
      <Helmet></Helmet>
      {/* какойто АПП БАР */}
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
