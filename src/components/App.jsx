import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Registration } from '../pages/Registration';
import { Contacts } from '../pages/Contacts';
import { LogIn } from '../pages/LogIn';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
