import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../UI/Button/Button.styled';
import { FormContrainer, FormLabel, FormInput } from '../UI/Form/Form.styled';
import { ContactFormContrainer, ContactFormCloseIcon } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { addContacts } from '../../redux/conytacts/operetion.js';
import { selectIsLoading } from '../../redux/conytacts/selectors.js';
import { LoaderRings } from '../UI/LoaderRings/LoaderRings';

export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handlSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;

    dispatch(
      addContacts({
        name: name.value,
        number: number.value,
      })
    )
      .unwrap()
      .then(() => {
        closeModal();
      })
      .catch(() => {
        toast.error('Oops! Something Went Wrong');
      });
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

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoaderRings /> : 'Add Contaact'}
        </Button>
      </FormContrainer>
      {!isLoading && <ContactFormCloseIcon onClick={closeModal} />}
    </ContactFormContrainer>
  );
};
