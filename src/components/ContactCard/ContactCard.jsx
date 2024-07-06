import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon';
import { CiTrash, CiEdit } from 'react-icons/ci';
import {
  ContactCardContrainer,
  ContactCardText,
  ContactCardName,
  ContactCardNumber,
  ContactCardBtn,
} from './ContactCard.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/store';

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();

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
        <ButtonIcon onClick={() => dispatch(deleteContact(id))}>
          <CiTrash size={'100%'} />
        </ButtonIcon>
      </ContactCardBtn>
    </ContactCardContrainer>
  );
};
