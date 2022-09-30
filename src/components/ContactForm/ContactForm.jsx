import s from '../ContactForm/ContactForm.module.css';

import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { postContactsThunk } from '../../redux/operations/operationsContacts';
import { contactsSelector } from '../../redux/selectors/contactsSelectors';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = { number, name };
    const contactName = newContact.name.toLowerCase();
    if (
      contacts.find(recordName => recordName.name.toLowerCase() === contactName)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(postContactsThunk(newContact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Tel:
        <input
          className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button size="medium" type="submit" variant="contained">
        Add contact
      </Button>
    </form>
  );
};
