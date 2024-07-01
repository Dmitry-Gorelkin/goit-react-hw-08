import { Filter } from '../Filter/Filter';
import { NewContact } from '../NewContact/NewContact';
import { Section } from '../UI/Section/Section.styled';
import { ContactActionsContrainer } from './ContactActions.styled';

export const ContactActions = () => {
  return (
    <Section>
      <ContactActionsContrainer>
        <Filter />
        <NewContact />
      </ContactActionsContrainer>
    </Section>
  );
};
