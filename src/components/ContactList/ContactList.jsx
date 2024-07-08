import { ContactCard } from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { Section } from '../UI/Section/Section.styled';
import { selectVisibleContacts, selectIsLoadingFech } from '../../redux/conytacts/selectors';
import { ContactListContrainer } from './ContactList.styled';
import { LoaderPuff } from '../UI/LoaderPuff/LoaderPuff';
import { NoContacts } from '../NoContacts/NoContacts';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoadingFech = useSelector(selectIsLoadingFech);

  return (
    <Section>
      {contacts.length !== 0 && (
        <ContactListContrainer>
          {contacts.map(contact => {
            const { name, number, id } = contact;
            return <ContactCard key={id} id={id} name={name} number={number} />;
          })}
        </ContactListContrainer>
      )}

      {contacts.length === 0 && !isLoadingFech && <NoContacts />}

      {isLoadingFech && <LoaderPuff />}
    </Section>
  );
};
