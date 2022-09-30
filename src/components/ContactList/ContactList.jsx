import s from '../ContactList/ContactList.module.css';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsThunk,
  deleteContactsThunk,
} from '../../redux/operations/operationsContacts';
import {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
} from '../../redux/selectors/contactsSelectors';
import { Loader } from '../Loader';
import React from 'react';

import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(recordName =>
      recordName.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  if (isLoading) {
    return <Loader />;
  }

  if (!contacts.length) {
    return <p>Сontact list is empty</p>;
  }

  if (!filterContacts.length) {
    return <p>Сontact not found</p>;
  } else {
    return (
      <ul className={s.list}>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.item}>
              <span className={s.name}>{name}: </span>
              <span className={s.tel}>{number} </span>
              <IconButton
                color="primary"
                size="small"
                aria-label="delete"
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContactsThunk(id))}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </li>
          );
        })}
      </ul>
    );
  }
};
