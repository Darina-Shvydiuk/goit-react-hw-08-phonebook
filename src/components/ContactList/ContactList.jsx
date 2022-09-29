import s from '../ContactList/ContactList.module.css';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsThunk,
  deleteContactsThunk,
} from '../../redux/operationsContacts/operationsContacts';
import { Loader } from '../Loader';
import React from 'react';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state);
  const isLoading = useSelector(state => state.contacts.isLoading);
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
        {filterContacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={s.item}>
              <span className={s.name}>{name}: </span>
              <span className={s.tel}>{phone} </span>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContactsThunk(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};
