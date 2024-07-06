import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Registration = lazy(() => import('../pages/Registration'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
