import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon';
import { CiTrash, CiEdit } from 'react-icons/ci';
import { ContactCardContrainer, ContactCardBtn } from './ContactCard.styled';

export const ContactCard = ({ name, number }) => {
  return (
    <ContactCardContrainer>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <ContactCardBtn>
        <ButtonIcon>
          <CiTrash size={'100%'} />
        </ButtonIcon>
        <ButtonIcon>
          <CiEdit size={'100%'} />
        </ButtonIcon>
      </ContactCardBtn>
    </ContactCardContrainer>
  );
};
