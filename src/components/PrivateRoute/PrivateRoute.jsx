import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/selectors/authSelectors';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
