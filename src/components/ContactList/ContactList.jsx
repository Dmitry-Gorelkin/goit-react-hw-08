import axios from 'axios';
import { ContactCard } from '../ContactCard/ContactCard';
import { Section } from '../UI/Section/Section.styled';
import { ContactListContrainer } from './ContactList.styled';
import { useEffect, useState } from 'react';

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('https://63d7ba94afbba6b7c942fd88.mockapi.io/contacts');
      setContacts([...response.data]);
    };

    fetchContacts();
  }, []);

  return (
    <Section>
      {contacts.length !== 0 && (
        <ContactListContrainer>
          {contacts.map(contact => {
            const { name, phone, id } = contact;
            return <ContactCard key={id} name={name} number={phone} />;
          })}
        </ContactListContrainer>
      )}
    </Section>
  );
};
