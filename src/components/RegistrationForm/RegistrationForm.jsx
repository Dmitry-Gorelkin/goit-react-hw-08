import {
  FormContrainer,
  FormLabel,
  FormInput,
  FormInputContrainer,
  FormInputIconVisibilityPassword,
} from '../UI/Form/Form.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegistrationFormContrainer } from './RegistrationForm.styled';
import { Button } from '../UI/Button/Button.styled';
import { LoaderRings } from '../UI/LoaderRings/LoaderRings';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import { registation } from '../../redux/auth/operetions';
import toast from 'react-hot-toast';

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  const handlSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target;
    dispatch(registation({ name: name.value, email: email.value, password: password.value }))
      .unwrap()
      .catch(() => {
        toast.error('Oops! Something Went Wrong');
      });
  };

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegistrationFormContrainer>
      <FormContrainer autoComplete="off" onSubmit={handlSubmit}>
        <FormLabel>
          Name
          <FormInput type="text" name="name" required />
        </FormLabel>

        <FormLabel>
          Email
          <FormInput type="email" name="email" required />
        </FormLabel>

        <FormLabel>
          Password
          <FormInputContrainer>
            <FormInput type={showPassword ? 'text' : 'password'} name="password" required />
            <FormInputIconVisibilityPassword
              onClick={togglePasswordVisible}
              visible={showPassword}
            />
          </FormInputContrainer>
        </FormLabel>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoaderRings /> : 'Registration'}
        </Button>
      </FormContrainer>
    </RegistrationFormContrainer>
  );
};
