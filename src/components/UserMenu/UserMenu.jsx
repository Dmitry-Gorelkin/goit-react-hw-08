import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../UI/Button/Button.styled';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operetion.js';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import { LoaderRings } from '../UI/LoaderRings/LoaderRings';
import toast from 'react-hot-toast';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const isLoading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Welcome, {name}</div>
      <Button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .catch(() => {
              toast.error('Oops! Something Went Wrong');
            })
        }
        disabled={isLoading}
      >
        {isLoading ? <LoaderRings /> : 'Log Out'}
      </Button>
    </div>
  );
};
