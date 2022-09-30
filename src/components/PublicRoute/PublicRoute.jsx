import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/selectors/authSelectors';

export const PublicRoute = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to={location.state?.login ?? '/contacts'} />
  ) : (
    <Outlet />
  );
};
