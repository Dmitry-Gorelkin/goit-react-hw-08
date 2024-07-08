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
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  const handlSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;

    dispatch(logIn({ email: email.value, password: password.value }))
      .unwrap()
      .catch(() => {
        toast.error('Oops! Something Went Wrong');
      });
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

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoaderRings /> : 'Log In'}
        </Button>
      </FormContrainer>
    </LoginFormContrainer>
  );
};
