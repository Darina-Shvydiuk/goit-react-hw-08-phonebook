import { useDispatch, useSelector } from 'react-redux';
import { getUserName, getUserEmail } from '../../redux/selectors/authSelectors';
import { postUserLogoutThunk } from '../../redux/operations/operationsAuth';
import s from '../../components/UserMenu/UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);

  const handleLogOut = () => {
    dispatch(postUserLogoutThunk());
  };

  return (
    <div className={s.inner}>
      <p className={s.user_name}> Welcome {name}</p>
      <p className={s.user_name}> {email}</p>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </div>
  );
};
