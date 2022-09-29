import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/selectors/authSelectors';
import { Container } from '@mui/material';
import s from '../LayoutPage/LayoutPage.module.css';

export const LayoutPage = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container maxWidth="sm">
      <header className={s.header}>
        <NavLink to="/" end className={getActiveClassName}>
          Home
        </NavLink>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
