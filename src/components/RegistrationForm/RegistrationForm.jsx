import {
  FormContrainer,
  FormLabel,
  FormInput,
  FormButton,
  FormInputContrainer,
  FormInputIconVisibilityPassword,
} from '../UI/Form/Form.styled';
import { useState } from 'react';
import { RegistrationFormContrainer } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlSubmit = e => {
    e.preventDefault();
  };

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegistrationFormContrainer>
      <FormContrainer autoComplete="off" onSubmit={handlSubmit}>
        <FormLabel>
          Name
          <FormInput type="text" name="username" required />
        </FormLabel>

        <FormLabel>
          Email
          <FormInput type="email" name="useremeail" required />
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

        <FormButton>Registration</FormButton>
      </FormContrainer>
    </RegistrationFormContrainer>
  );
};
