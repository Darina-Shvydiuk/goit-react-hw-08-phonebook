// import s from '../HomePage/HomePage.module.css';
import { useSelector } from 'react-redux';
import {
  getUserName,
  getIsLoggedIn,
} from '../../redux/selectors/authSelectors';
import ContactsPage from '../ContactsPage';
import s from '../HomePage/HomePage.module.css';

export const HomePage = () => {
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className={s.title}>{`Hi, ${userName}!`}</h1>
          <p className={s.text}>
            This is a phone book, here you can create, store, search and delete
            contacts.
          </p>
          <ContactsPage />
        </div>
      ) : (
        <h1 className={s.title}>Welcome! Please, login to continue.</h1>
      )}
    </div>
  );
};
