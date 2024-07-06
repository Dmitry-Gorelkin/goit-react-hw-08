import { useDispatch } from 'react-redux';
import { Button } from '../UI/Button/Button.styled';
import { FormContrainer, FormLabel, FormInput } from '../UI/Form/Form.styled';
import { ContactFormContrainer, ContactFormCloseIcon } from './ContactForm.styled';
import { addContact } from '../../redux/store';

import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handlSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    dispatch(
      addContact({
        name: name.value,
        number: number.value,
        id: nanoid(),
      })
    );

    closeModal();
  };
  return (
    <ContactFormContrainer>
      <FormContrainer autoComplete="off" onSubmit={handlSubmit}>
        <FormLabel htmlFor="">
          Name
          <FormInput type="text" name="name" required />
        </FormLabel>

        <FormLabel htmlFor="">
          Number
          <FormInput type="tel" name="number" id="" required />
        </FormLabel>

        <Button type="submit">Add Contaact</Button>
      </FormContrainer>
      <ContactFormCloseIcon onClick={closeModal} />
    </ContactFormContrainer>
  );
};
