import { ContactCard } from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { Section } from '../UI/Section/Section.styled';
import { selectVisibleContacts } from '../../redux/conytacts/selectors';
import { ContactListContrainer } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

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
    </Section>
  );
};
