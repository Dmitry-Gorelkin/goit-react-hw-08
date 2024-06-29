import { FormContrainer, FormLabel, FormInput, FormButton } from '../UI/Form/Form.styled';
import { ContactFormContrainer, ContactFormCloseIcon } from './ContactForm.styled';

export const ContactForm = ({ closeModal }) => {
  const handlSubmit = e => {
    e.preventDefault();

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

        <FormButton type="submit">Add Contaact</FormButton>
      </FormContrainer>
      <ContactFormCloseIcon onClick={closeModal} />
    </ContactFormContrainer>
  );
};
