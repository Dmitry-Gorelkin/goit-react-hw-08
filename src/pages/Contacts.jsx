import { Helmet } from 'react-helmet';
import { ContactActions } from '../components/ContactActions/ContactActions';
import { ContactList } from '../components/ContactList/ContactList';

export const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactActions />
      <ContactList />
    </>
  );
};
