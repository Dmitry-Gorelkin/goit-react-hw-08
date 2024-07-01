import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon';
import { CiTrash, CiEdit } from 'react-icons/ci';
import {
  ContactCardContrainer,
  ContactCardText,
  ContactCardName,
  ContactCardNumber,
  ContactCardBtn,
} from './ContactCard.styled';

export const ContactCard = ({ name, number }) => {
  return (
    <ContactCardContrainer>
      <ContactCardText>
        <ContactCardName>{name}</ContactCardName>
        <ContactCardNumber>{number}</ContactCardNumber>
      </ContactCardText>
      <ContactCardBtn>
        <ButtonIcon>
          <CiEdit size={'100%'} />
        </ButtonIcon>
        <ButtonIcon>
          <CiTrash size={'100%'} />
        </ButtonIcon>
      </ContactCardBtn>
    </ContactCardContrainer>
  );
};
