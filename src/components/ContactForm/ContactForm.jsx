import { Button } from '../UI/Button/Button.styled';
import { FormContrainer, FormLabel, FormInput } from '../UI/Form/Form.styled';
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

        <Button type="submit">Add Contaact</Button>
      </FormContrainer>
      <ContactFormCloseIcon onClick={closeModal} />
    </ContactFormContrainer>
  );
};
