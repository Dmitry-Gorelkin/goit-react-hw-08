import { Helmet } from 'react-helmet';
import { NewContact } from '../components/NewContact/NewContact';

export const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <NewContact />
      <div>Filter</div>
      <div>New Contsct</div>
      <div>Contscts List</div>
    </>
  );
};
