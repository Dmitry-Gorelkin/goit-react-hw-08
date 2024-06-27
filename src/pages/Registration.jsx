import { Helmet } from 'react-helmet';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

export const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegistrationForm />
    </>
  );
};
