import s from '../Filter/Filter.module.css';

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Slice/filterSlice/filterSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleFilter = event => {
    const { value } = event.target;
    dispatch(filterContacts(value));
    setFilter(value);
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        onChange={handleFilter}
        value={filter}
        type="text"
        name="filter"
        title=" Find contacts by name"
      />
    </label>
  );
};
