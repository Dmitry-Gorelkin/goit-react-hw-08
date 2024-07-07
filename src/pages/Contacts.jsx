import { Helmet } from 'react-helmet';
import { ContactActions } from '../components/ContactActions/ContactActions';
import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/conytacts/operetion';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

export default Contacts;
