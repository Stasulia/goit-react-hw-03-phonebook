import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const newContact = contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contactItem}>
        <p className={css.contactText}>
          {name} : {number}
        </p>
        <button
          className={css.contactBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul className={css.contactList}>{newContact}</ul>;
};

export default ContactList;
