import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

export default Filter;
