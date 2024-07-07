import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
