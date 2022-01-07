import React from 'react';
import st from './Phonebook.module.css';

const Phonebook = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id} className={st.contact}>
          <p className={st.contact__name}>{name}</p>
          <button type="button" className={st.btn__delete} onClick={() => onDeleteContact(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Phonebook;