import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/selectors/authSelectors';
import { postUserLogout } from '../../services/authApi';
import s from '../../components/UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.inner}>
      <p className={s.user_name}> Welcome {name}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(postUserLogout())}
      >
        LogOut
      </button>
    </div>
  );
};
