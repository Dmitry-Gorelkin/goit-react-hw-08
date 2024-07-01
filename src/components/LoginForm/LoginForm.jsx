import { useState } from 'react';
import {
  FormContrainer,
  FormLabel,
  FormInput,
  FormInputContrainer,
  FormInputIconVisibilityPassword,
} from '../UI/Form/Form.styled';
import { LoginFormContrainer } from './LoginForm.styled';
import { LoaderRings } from '../UI/LoaderRings/LoaderRings';
import { Button } from '../UI/Button/Button.styled';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlSubmit = e => {
    e.preventDefault();
  };

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginFormContrainer>
      <FormContrainer autoComplete="off" onSubmit={handlSubmit}>
        <FormLabel>
          Email
          <FormInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            required
          />
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

        <Button type="submit">Log In</Button>
        <Button type="submit">
          <LoaderRings />
        </Button>
      </FormContrainer>
    </LoginFormContrainer>
  );
};
