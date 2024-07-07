import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon.styled';
import { CiTrash, CiEdit } from 'react-icons/ci';
import {
  ContactCardContrainer,
  ContactCardText,
  ContactCardName,
  ContactCardNumber,
  ContactCardBtn,
} from './ContactCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/conytacts/operetion';
import { selectIsLoading } from '../../redux/conytacts/selectors';

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactCardContrainer>
      <ContactCardText>
        <ContactCardName>{name}</ContactCardName>
        <ContactCardNumber>{number}</ContactCardNumber>
      </ContactCardText>
      <ContactCardBtn>
        <ButtonIcon disabled={isLoading}>
          <CiEdit size={'100%'} />
        </ButtonIcon>
        <ButtonIcon onClick={() => dispatch(deleteContacts(id))} disabled={isLoading}>
          <CiTrash size={'100%'} />
        </ButtonIcon>
      </ContactCardBtn>
    </ContactCardContrainer>
  );
};
