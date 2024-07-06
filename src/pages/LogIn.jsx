import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>

      <LoginForm />
    </>
  );
};

export default LogIn;
