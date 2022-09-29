import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };
  return (
    <div>
      <NavLink to="/login" className={getActiveClassName}>
        Login
      </NavLink>
      <NavLink to="/register" className={getActiveClassName}>
        Registration
      </NavLink>
    </div>
  );
};
