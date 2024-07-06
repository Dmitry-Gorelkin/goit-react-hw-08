import { ContactCard } from '../ContactCard/ContactCard';
import { Section } from '../UI/Section/Section.styled';
import { ContactListContrainer } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(s => s.contacts);

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
